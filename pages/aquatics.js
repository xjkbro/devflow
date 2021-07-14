import Footer from "../components/Footer";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Link from "next/link";
import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
} from "@mui-treasury/components/info";
import styles from "../styles/Category.module.css";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import { ArticlePagination } from "../utils/ArticlePagination";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

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
export default function Aquatics({ posts, page, totalPosts, maxPerPage }) {
    const classes = useStyles();
    const router = useRouter();
    if (!posts) return <Loading />;
    const lastPage = Math.ceil(totalPosts / maxPerPage);
    console.log(posts);
    return (
        <div>
            <NavBar />
            <div className={styles.bigTitle}>Aquatics</div>
            <div className={styles.smallTitle}>
                {page} of {lastPage}
            </div>
            <div className={styles.smallTitle}>{totalPosts} posts</div>
            <div className={styles.container}>
                {posts.map((item) => {
                    let date = new Date(item.publishedAt);
                    let itemDate =
                        date.getMonth() +
                        1 +
                        "-" +
                        date.getDate() +
                        "-" +
                        date.getFullYear();
                    return (
                        <div className={styles.itemContainer}>
                            <Link href={`/aquatics/${item.slug.current}`}>
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
                                                <InfoSubtitle
                                                    style={{
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    {itemDate}
                                                </InfoSubtitle>
                                                <InfoTitle>Buds 2019</InfoTitle>
                                                <InfoCaption>
                                                    {item.body[0].children[0].text.substring(
                                                        0,
                                                        25
                                                    )}
                                                    ...
                                                </InfoCaption>
                                            </Info>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className={styles.pagination}>
                <Button
                    className={styles.previous}
                    onClick={() => router.push(`/aquatics?page=${page - 1}`)}
                    disabled={page <= 1}
                >
                    Previous
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => router.push(`/aquatics?page=${page + 1}`)}
                    disabled={page == lastPage}
                >
                    Next
                </Button>
            </div>
            <div className={styles.horizontalLine} />
            <Footer />
        </div>
    );
}
export const getServerSideProps = async ({ query: { page = 1 } }) => {
    const maxPosts = 3;

    const getNumberOfPosts = await sanityClient.fetch(
        `count(*[_type == "post"  && category->title == "Aquatics"])`
    );
    const posts = await sanityClient.fetch(
        `
        *[_type == "post"  && category->title == "Aquatics"][${ArticlePagination(
            page,
            maxPosts
        )}] | order(_createdAt desc) {
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
    );
    // console.log(posts);
    return {
        props: {
            posts,
            page: +page,
            totalPosts: getNumberOfPosts,
            maxPerPage: maxPosts,
        },
    };
};
