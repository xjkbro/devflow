import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor, sanityClient, serializers } from "../../utils/sanity";
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
        <Layout>
            <div>
                <NavBar />
                <MainSection>
                    <img
                        className={styles.image}
                        src={urlFor(article.mainImage)}
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
    *[slug.current == "${params.slug}" && category->title == "Lifting"][0]{
        title,
        _id,
        slug,
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
