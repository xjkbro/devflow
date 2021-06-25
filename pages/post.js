import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import sanityClient from "../utils/client";
import styled from "styled-components";

export default function post() {
    const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
            )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    return (
        <div>
            <NavBar />
            <PostContainer>
                <PostTitle></PostTitle>
                <PostSubTitle></PostSubTitle>
                <PostImg></PostImg>
                <PostDescription></PostDescription>
            </PostContainer>
        </div>
    );
}
const PostContainer = styled.div``;
const PostTitle = styled.h1``;
const PostSubTitle = styled.h2``;
const PostImg = styled.img``;
const PostDescription = styled.p``;
