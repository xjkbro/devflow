import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
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
    if (!team) return <Loading />;
    return (
        <Container>
            <NavBar />
            {team.map((item) => (
                <ItemContainer key={item._id}>
                    <Image src={urlFor(item.image)} />
                    <TextContainer>
                        <h1>{item.name}</h1>
                        <BlockContent
                            blocks={item.bio}
                            serializers={serializers}
                            projectId="d6vys1oo"
                            dataset="production"
                        />
                    </TextContainer>
                </ItemContainer>
            ))}
            <Footer />
        </Container>
    );
}

const Container = styled.div``;
const ItemContainer = styled.div`
    display: flex;
    padding: 100px 200px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    width: 700px;
    > h1 {
        font-size: 2rem;
        font-weight: 700;
        padding-bottom: 10px;
    }
`;
const Image = styled.img`
    height: 350px;
    border-radius: 50%;
`;
