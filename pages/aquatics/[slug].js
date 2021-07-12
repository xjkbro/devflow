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
const Line = styled.div`
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`;
const Title = styled.div`
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
`;
const Author = styled.div`
    font-size: 1rem;
    font-weight: 200;
    text-transform: full-width;
`;
const Body = styled.div`
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 300;
    div > div > iframe {
        margin: 0 auto;
        padding: 20px 0;
    }
    div > pre {
        margin: 5vh 20vw;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 5px;
        box-shadow: 1px 1px 3px black;
    }
`;
