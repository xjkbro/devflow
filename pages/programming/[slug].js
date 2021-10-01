import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BlockContent from "@sanity/block-content-to-react";
import { sanityClient, serializers, urlFor } from "../../utils/sanity";
import Error from "../error";
import styles from "../../styles/Article.module.css";
import ViewCounter from "../../components/ViewCounter";
import Layout from "../../components/Layout";
import { parseISOString, isoFormatDMY } from "../../utils/Date";
import styled from "styled-components";

const MainSection = styled.div`
    @media (min-width: 768px) {
        width: 50vw;
        margin: auto;
    }
`;
export default function SinglePage({ article }) {
    if (!article) return <Error />;
    const date = parseISOString(article.publishedAt);
    return (
        <Layout article={article}>
            <div>
                <NavBar />
                <MainSection>
                    <img
                        className={styles.image}
                        src={urlFor(article.mainImage)}
                        alt="Article Feature Image"
                    />
                    <div className={styles.title}>{article.title}</div>
                    <div className={styles.author}>by: {article.name}</div>
                    <div>
                        {"Published: " + isoFormatDMY(date) + " - "}
                        <ViewCounter
                            view={true}
                            slug={`${article.slug.current}`}
                        />
                    </div>
                    <div className={styles.body}>
                        <BlockContent
                            blocks={article.body}
                            serializers={serializers}
                            projectId="d6vys1oo"
                            dataset="production"
                        />
                    </div>
                </MainSection>
                <div className={styles.horizontalLine} />
                <Footer />
            </div>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const post = await sanityClient.fetch(
        `
    *[slug.current == "${params.slug}" && category->title == "Programming"][0]{
        title,
        _id,
        slug,
        summary,
        category->{title,_id,description},
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        publishedAt,
        "name": author->name,
    }
    `
    );
    return {
        props: {
            article: post,
        },
        revalidate: 720, //revalidate every 12hrs or 720mins
    };
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(`
    *[_type == "post" && defined(slug.current)][].slug.current
    `);
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    };
}
