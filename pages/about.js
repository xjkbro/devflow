import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";
import styles from "../styles/About.module.css";

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
        <div>
            <NavBar />
            {team.map((item) => (
                <div className={styles.itemContainer} key={item._id}>
                    <img className={styles.image} src={urlFor(item.image)} />
                    <div className={styles.textContainer}>
                        <h1>{item.name}</h1>
                        <BlockContent
                            blocks={item.bio}
                            serializers={serializers}
                            projectId="d6vys1oo"
                            dataset="production"
                        />
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    );
}
