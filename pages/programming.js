import Footer from "../components/Footer";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Link from "next/link";
import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { Info, InfoTitle } from "@mui-treasury/components/info";
import styling from "../styles/Category.module.css";

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
export default function Programming() {
    const styles = useStyles();
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
            <div className={styling.bigTitle}>Programming</div>
            <div className={styling.container}>
                {programming.map((item) => (
                    <div className={styling.itemContainer}>
                        <a href={`/programming/${item.slug.current}`}>
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
                    </div>
                ))}
            </div>
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
    /* width: 426px;
    height: 240px;
    overflow: hidden;
    position: relative; 
    background-color: white;
    border-radius: 10px;
    border: 1px solid white;*/
    margin: 10px;
    margin-bottom: 30px;
    transition: all 150ms ease-in;
    :hover {
        transform: scale(1.005);
        color: black;
        opacity: 1;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    }
    .MuiPaper-root {
        background-color: black;
    }
`;
const Image = styled.img`
    height: auto;
    width: auto;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
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
