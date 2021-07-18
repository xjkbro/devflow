import useSWR from "swr";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const baseUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`;
const baseUrl =
    "https://d6vys1oo.api.sanity.io/v2021-06-07/data/query/production";

const fetcher = async (query, route) => {
    query = encodeURIComponent(query);
    // Only encodeURI is needed for route so that the `$` doesn't get mangled.
    route = encodeURI(`$route="${route}"`);

    const url = `${baseUrl}?query=${query}&${route}`;

    return await fetch(url).then((result) => result.json());
};

const sanityQuery = (query, route, initialData) => {
    // The `data` object always has the same shape: `{ data: { result: {...} } }`.
    // We alias `data` as `result` for clarity when spreading/destructuring:
    // i.e. `{...result} and {result}` vs `{...data} and {result}`
    const { data: result, error } = useSWR([query, route], fetcher, {
        initialData,
        revalidateOnFocus: false,
    });

    return { ...result, error };
};

export { useQuery as default, fetcher };
