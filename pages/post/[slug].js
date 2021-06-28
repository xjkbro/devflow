import NavBar from "../../components/NavBar";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../utils/client";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

export default function SinglePage() {
    const [singlePost, setSinglePost] = useState(null);
    const router = useRouter();
    const { slug } = router.query;
    useEffect(() => {
        sanityClient
            .fetch(
                `
        *[slug.current == "${slug}" && category->title == "Programming"]{
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
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);
    if (!singlePost) return <div>LOADING ...</div>;
    return (
        <div>
            <NavBar />
            <h1>{singlePost.title}</h1>
            <h5>{singlePost.name}</h5>
            <BlockContent
                blocks={singlePost.body}
                serializers={serializers}
                projectId="d6vys1oo"
                dataset="production"
            />
        </div>
    );
}
