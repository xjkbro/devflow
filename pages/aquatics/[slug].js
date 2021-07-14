import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor, sanityClient, serializers } from "../../utils/sanity";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Error from "../error";
import styled from "styled-components";
import styles from "../../styles/Article.module.css";

export default function SinglePage() {
    const [singlePost, setSinglePost] = useState(null);
    const [errorFound, setErrorFound] = useState(false);
    const router = useRouter();
    const { slug } = router.query;
    useEffect(() => {
        sanityClient
            .fetch(
                `
        *[slug.current == "${slug}"  && category->title == "Aquatics"]{
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
            )
            .then((data) => {
                console.log(data[0]);
                setSinglePost(data[0]);
            })
            .catch(console.error);
    }, [slug]);
    if (!singlePost) return <Error />;

    // if (errorFound == true) return <Error />;
    // else if (!singlePost && errorFound == false) return <Loading />;
    return (
        <div>
            <NavBar />
            <img className={styles.image} src={urlFor(singlePost.mainImage)} />
            <div className={styles.title}>{singlePost.title}</div>
            <div className={styles.author}>by: {singlePost.name}</div>
            <div className={styles.body}>
                <BlockContent
                    blocks={singlePost.body}
                    serializers={serializers}
                    projectId="d6vys1oo"
                    dataset="production"
                />
            </div>
            <div className={styles.horizontalLine} />
            <Footer />
        </div>
    );
}
