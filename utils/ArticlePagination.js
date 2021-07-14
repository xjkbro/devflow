export const ArticlePagination = (page, maxPosts) => {
    // console.log(parseInt(page));
    let first = maxPosts * (parseInt(page) - 1);
    let last = maxPosts * parseInt(page);
    // console.log(first, last);
    return `${first}...${last}`;
};
