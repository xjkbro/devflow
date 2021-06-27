import NavBar from "../components/NavBar";
import sanityClient from "../utils/client";
import imageUrlBuilder from "@sanity/image-url";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import BlockContent from "@sanity/block-content-to-react";

import { useEffect, useState } from "react";

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
    const [myPost, setMyPost] = useState(null);
    const slug = "welcome-our-ceo-jason";
    useEffect(() => {
        sanityClient
            .fetch(
                `
        *[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,

        }
        `
            )
            .then((data) => setMyPost(data[0]))
            .catch(console.error);
    }, [slug]);
    if (!myPost) return <div>LOADING ...</div>;
    return (
        <div>
            <NavBar />
            ABOUT PAGE
            <h1>{myPost.title}</h1>
            <h5>{myPost.name}</h5>
            <BlockContent
                blocks={myPost.body}
                serializers={serializers}
                projectId="d6vys1oo"
                dataset="production"
            />
        </div>
    );
}
