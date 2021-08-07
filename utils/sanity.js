import { createClient, createImageUrlBuilder } from "next-sanity";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import imageUrlBuilder from "@sanity/image-url";

const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-03-25", // use a UTC date string
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
};
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/

// Set up the client for fetching data in the getProps page functions

export const sanityClient = createClient(config);
const opts = {
    height: "480",
    width: "640",
};

export const urlFor = (source) => {
    return imageUrlBuilder(sanityClient).image(source);
};

export const serializers = {
    types: {
        youtube: ({ node }) => {
            const { url } = node;
            const id = getYouTubeId(url);
            return <YouTube videoId={id} opts={opts} />;
        },
        code: ({ node }) => {
            return (
                <pre>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div>
                        <code>{node.code}</code>
                    </div>
                </pre>
            );
        },
    },
};
