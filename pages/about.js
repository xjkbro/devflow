import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import BlockContent from "@sanity/block-content-to-react";
import styles from "../styles/About.module.css";
import sanityQuery, { getAboutQuery } from "../lib/sanityQuery";
import styled from "styled-components";
import Head from "next/head";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}
const serializers = {
    types: {
        youtube: ({ node }) => {
            const { url } = node;
            const id = getYouTubeId(url);
            return <YouTube videoId={id} />;
        },
    },
};

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    @media (max-width: 1100px) {
        margin: 5px;
        flex-direction: column;
        flex-wrap: column;
        padding: 30px 50px;
        > div > div > p {
            word-wrap: break-word;
            justify-content: left;
        }
    }
    @media (max-width: 700px) {
        margin: 0px;
        flex-direction: column;
        flex-wrap: column;
        padding: 5px 5px;
        > div > div > p {
            word-wrap: break-word;
            justify-content: left;
        }
    }
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    width: 50%;
    > h1 {
        font-size: 2rem;
        font-weight: 700;
        padding-bottom: 10px;
    }
    > h3 {
        font-size: 1.2rem;
        font-weight: 500;
        padding-bottom: 10px;
        color: rgb(177, 177, 177);
    }
    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between;
        width: 80%;
    }
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between;
        width: 100%;
    }
`;
const Line = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 75vw;
    margin: 30px auto 30px auto;
`;
const Image = styled.img`
    height: 350px;
    /* border-radius: 50%; */
    margin-right: 50px;
    @media (max-width: 1100px) {
        height: 450px;
        width: 450px;
        border-radius: 0;
        margin-right: 0px;
    }
    @media (max-width: 700px) {
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
`;

export default function Abouts() {
    const { result: aboutPosts, error: aboutPostsError } = sanityQuery(
        getAboutQuery()
    );

    if (!aboutPosts) return <Loading />;
    return (
        <div>
            <Head>
                <title>About | DevFlow</title>
            </Head>
            <NavBar />
            {!aboutPosts ? <Loading /> : <></>}
            {aboutPosts.map((item) => (
                <>
                    <ItemContainer key={item._id}>
                        <Image
                            className={styles.image}
                            src={urlFor(item.image)}
                        />

                        <TextContainer>
                            <h1>{item.name}</h1>
                            <h3>{item.role}</h3>
                            <BlockContent
                                blocks={item.bio}
                                serializers={serializers}
                                projectId="d6vys1oo"
                                dataset="production"
                                className="textBody"
                            />
                        </TextContainer>
                    </ItemContainer>
                    <Line />
                </>
            ))}
            <Footer />
        </div>
    );
}
// export const getServerSideProps = async ({}) => {
//     const team = await sanityClient.fetch(
//         `*[_type == "author"]| order(_createdAt desc){
//                     name,
//                     _id,
//                     slug,
//                     role,
//                     image,
//                     bio,
//                 }`
//     );
//     return {
//         props: {
//             team,
//         },
//     };
// };
