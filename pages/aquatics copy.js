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

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { Info, InfoTitle } from "@mui-treasury/components/info";

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
const useStyles = makeStyles({
    card: {
        minWidth: 426,
        minHeight: 240,
        position: "relative",
        transform: "scale(1.05)",
    },
    content: {
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        width: "100%",
    },
    titles: {
        color: "white",
    },
});
export default function Aquatics() {
    const styles = useStyles();
    const [aquatics, setAquatics] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "post"  && category->title == "Aquatics"] | order(_createdAt desc){
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
                setAquatics(data);
            })
            .catch(console.error);
    }, []);
    if (!aquatics) return <Loading />;
    return (
        <div>
            <NavBar />
            <BigTitle>Aquatics</BigTitle>
            <Container>
                {aquatics.map((item) => (
                    <ItemContainer>
                        <a href={`/aquatics/${item.slug.current}`}>
                            <Card className={styles.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={styles.card}
                                        image={urlFor(item.mainImage)}
                                        title={item.title}
                                    />
                                    <Box
                                        py={3}
                                        px={2}
                                        className={styles.content}
                                    >
                                        <Info className={styles.titles}>
                                            <InfoTitle>{item.title}</InfoTitle>
                                        </Info>
                                    </Box>
                                </CardActionArea>
                            </Card>
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
    margin: 10px;
    margin-bottom: 30px;
    transition: all 150ms ease-in;
    :hover {
        /* transform: scale(1.005); */
        opacity: 1;
        box-shadow: 0px 5px 5px #111;
    }
    .MuiPaper-root {
        background-color: black;
    }
`;
