import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import BlockContent from "@sanity/block-content-to-react";
import { sanityClient, serializers } from "../../utils/sanity";
import { useRouter } from "next/router";
import Error from "../error";
import styles from "../../styles/Article.module.css";
import imageUrlBuilder from "@sanity/image-url";
import ViewCounter from "../../components/ViewCounter";
import Head from "next/head";
import Layout from "../../components/Layout";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SinglePage({ article }) {
    if (!article) return <Error />;
    return (
        <Layout article={article}>
            <div>
                <NavBar />
                <img className={styles.image} src={urlFor(article.mainImage)} />
                <div className={styles.title}>{article.title}</div>
                <div className={styles.author}>by: {article.name}</div>
                <ViewCounter view={true} slug={`${article.slug.current}`} />
                <div className={styles.body}>
                    <BlockContent
                        blocks={article.body}
                        serializers={serializers}
                        projectId="d6vys1oo"
                        dataset="production"
                    />
                </div>
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
        category->{title,_id,description},
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
    }
    `
    );
    // console.log(post);
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
