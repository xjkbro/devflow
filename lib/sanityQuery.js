import useSWR from "swr";
import groq from "groq";
import { ArticlePagination } from "../utils/ArticlePagination";
import { sanityClient } from "../utils/sanity";

const fetcher = async (query) => {
    return await sanityClient.fetch(query);
};

const sanityQuery = (query) => {
    const { data: result, error } = useSWR(query, fetcher);
    return { result, error };
};

const getPostsQuery = (title, page, maxPosts) => {
    return groq`
    *[_type == "post"  && category->title == "${title}"] | order(publishedAt desc) [${ArticlePagination(
        page,
        maxPosts
    )}] {
        title,
        _id,
        slug,
        author->{name, _id, slug,image, bio},
        mainImage,
        category->{title,_id,description},
        publishedAt,
        body,
    } `;
};
const getTotalPostsQuery = (title) =>
    groq`count(*[_type == "post"  && category->title == "${title}"])`;

const getAboutQuery = () => groq`*[_type == "author"]| order(_createdAt desc){
    name,
    _id,
    slug,
    role,
    image,
    bio,
}`;

export {
    sanityQuery as default,
    fetcher,
    getPostsQuery,
    getTotalPostsQuery,
    getAboutQuery,
};
