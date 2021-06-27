import NavBar from "../components/NavBar";
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
                *[_type == "post" && category->title == "Programming"] | order(_createdAt asc){
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
    if (!programming) return <div>LOADING ...</div>;
    return (
        <div>
            <NavBar />
            {programming.map((item) => (
                <ItemContainer key={item.slug}>
                    <h1>{item.title}</h1>
                    <h4>{item.author.name}</h4>
                    <Image src={urlFor(item.mainImage)} />
                    <BlockContent
                        blocks={item.body}
                        serializers={serializers}
                        projectId="d6vys1oo"
                        dataset="production"
                    />
                </ItemContainer>
            ))}
        </div>
    );
}

const ItemContainer = styled.div``;
const Image = styled.img`
    height: 200px;
    border-radius: 50%;
`;
