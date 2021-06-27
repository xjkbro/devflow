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
export default function About() {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "author"]| order(_createdAt asc){
                    name,
                    _id,
                    slug,
                    image,
                    bio,
                }
                `
            )
            .then((data) => {
                console.log(data);
                setTeam(data);
            })
            .catch(console.error);
    }, []);
    if (!team) return <div>LOADING ...</div>;
    return (
        <Container>
            <NavBar />
            ABOUT PAGE
            {team.map((item) => (
                <ItemContainer key={item._id}>
                    <h1>{item.name}</h1>
                    <Image src={urlFor(item.image)} />
                    <BlockContent
                        blocks={item.bio}
                        serializers={serializers}
                        projectId="d6vys1oo"
                        dataset="production"
                    />
                </ItemContainer>
            ))}
        </Container>
    );
}

const Container = styled.div``;
const ItemContainer = styled.div``;
const Image = styled.img`
    height: 200px;
    border-radius: 50%;
`;
