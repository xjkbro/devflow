import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import sanityClient from "../utils/client";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";

export default function Home() {
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
        <Container>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <NavBar />
                <Header />

                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    {postData &&
                        postData.map((post, index) => {
                            console.log(post);
                            return (
                                <Link
                                    href={`/post/${post.slug.current}`}
                                    key={index}
                                >
                                    <div className="bg-green">
                                        <h1>{post.title}</h1>
                                        <h5>{post.author}</h5>
                                        <BlockContent
                                            block={post.body}
                                            projectId="d6vys1oo"
                                            dataset="production"
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                </main>

                <div id="blog">askduhalksdjhlkajsd</div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    margin: 0px 200px;
`;
