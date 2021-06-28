import Footer from "../components/Footer";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Link from "next/link";
import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
export default function Programming() {
    const [programming, setProgramming] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "post"  && category->title == "Programming"] | order(_createdAt desc){
                    title,
                    _id,
                    slug,
                    author->{name, _id, slug,image, bio},
                    mainImage,
                    category->{title,_id,description},
                    publishedAt,
                    body,
                }
                `
            )
            .then((data) => {
                console.log(data);
                setProgramming(data);
            })
            .catch(console.error);
    }, []);
    if (!programming) return <Loading />;
    return (
        <div>
            <NavBar />
            <BigTitle>Programming</BigTitle>
            <Container>
                {programming.map((item) => (
                    <ItemContainer key={item.slug}>
                        <a href={`/programming/${item.slug.current}`}>
                            <Text>
                                <h1>{item.title}</h1>
                                {/* <h4>{item.author.name}</h4> */}
                            </Text>
                            <Image src={urlFor(item.mainImage)} />
                            {/* <BlockContent
                            blocks={item.body}
                            serializers={serializers}
                            projectId="d6vys1oo"
                            dataset="production"
                        /> */}
                        </a>
                    </ItemContainer>
                ))}
            </Container>
            <Footer />
        </div>
    );
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const BigTitle = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 50px;
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
`;
const ItemContainer = styled.div`
    width: 400px;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    border: 1px solid white;
    margin: 10px;
    margin-bottom: 30px;
    position: relative;
    transition: all 150ms ease-in;
    :hover {
        transform: scale(1.005);
        color: black;
        opacity: 1;
        box-shadow: 0px 5px 15px #222;
    }
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`;
const Text = styled.div`
    color: white;
    position: absolute;
    bottom: 0px;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 150ms ease-in;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1rem;
    :hover {
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 1;
    }
`;
