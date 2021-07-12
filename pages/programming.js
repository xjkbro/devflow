import Footer from "../components/Footer";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Link from "next/link";
import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { Info, InfoTitle } from "@mui-treasury/components/info";
import styles from "../styles/Category.module.css";

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
    const classes = useStyles();
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
            <div className={styles.bigTitle}>Programming</div>
            <div className={styles.container}>
                {programming.map((item) => (
                    <div className={styles.itemContainer}>
                        <a href={`/programming/${item.slug.current}`}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.card}
                                        image={urlFor(item.mainImage)}
                                        title={item.title}
                                    />
                                    <Box
                                        py={3}
                                        px={2}
                                        className={classes.content}
                                    >
                                        <Info className={classes.titles}>
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
