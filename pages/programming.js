import Footer from "../components/Footer";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Link from "next/link";
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
import ViewCounter from "../components/ViewCounter";
import sanityQuery, {
    getPostsQuery,
    getTotalPostsQuery,
} from "../lib/sanityQuery";
import { urlFor } from "../utils/sanity";

import Layout from "../components/Layout";

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
    const maxPosts = 6;
    const router = useRouter();
    let page = parseInt(router.query.page);

    if (!page) page = 1;
    const { result: totalPosts, error: totalPostsError } = sanityQuery(
        getTotalPostsQuery("Programming")
    );
    const { result: posts, error: postsError } = sanityQuery(
        getPostsQuery("Programming", page, maxPosts)
    );
    const classes = useStyles();
    const lastPage = Math.ceil(totalPosts / maxPosts);
    return (
        <Layout>
            <div>
                <NavBar />
                <div className={styles.bigTitle}>Programming</div>
                <div className={styles.smallTitle}>
                    {page} of {lastPage}
                </div>
                <div className={styles.smallTitle}>{totalPosts} posts</div>
                {!posts ? <Loading /> : <></>}
                <div className={styles.container}>
                    {posts?.map((item) => {
                        let date = new Date(item.publishedAt);
                        let itemDate =
                            date.getMonth() +
                            1 +
                            "-" +
                            date.getDate() +
                            "-" +
                            date.getFullYear();
                        return (
                            <div
                                className={styles.itemContainer}
                                key={item.slug.current}
                            >
                                <Link
                                    href={`/programming/${item.slug.current}`}
                                >
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
                                                <Info
                                                    className={classes.titles}
                                                >
                                                    <InfoSubtitle
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        {/* {itemDate} */}
                                                        <ViewCounter
                                                            view={false}
                                                            slug={`${item.slug.current}`}
                                                        />
                                                    </InfoSubtitle>
                                                    <InfoTitle>
                                                        {item.title}
                                                    </InfoTitle>
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
                        onClick={() =>
                            router.push(`/programming?page=${page - 1}`)
                        }
                        disabled={page <= 1}
                    >
                        Previous
                    </Button>
                    <Button
                        className={classes.button}
                        onClick={() =>
                            router.push(`/programming?page=${page + 1}`)
                        }
                        disabled={page == lastPage}
                    >
                        Next
                    </Button>
                </div>
                <div className={styles.horizontalLine} />
                <Footer />
            </div>
        </Layout>
    );
}
