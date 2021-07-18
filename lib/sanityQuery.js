import useSWR from "swr";
import groq from "groq";
import { ArticlePagination } from "../utils/ArticlePagination";
import sanityClient from "../utils/client";

const fetcher = async (query) => {
    return await sanityClient.fetch(query);
};

const sanityQuery = (query) => {
    const { data: result, error } = useSWR(query, fetcher);
    console.log(result);
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

export { sanityQuery as default, fetcher, getPostsQuery, getTotalPostsQuery };
