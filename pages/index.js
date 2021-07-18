import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import sanityClient from "../utils/client";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
    return (
        <Container>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>DevFlow</title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="DevFlow is a project that doubles as a brand and a personality. DevFlow is known to provide educational and entertainment value by producing content that involved teaching others programming, showing my journey as a Web Developer, showcasing my love for Aquariums and fishkeeping and share my fitness goals and aspirations."
                />
                <meta
                    name="keywords"
                    content="HTML,CSS,JavaScript,ES6,TailwindCSS,Bootstrap,React,ReactJS,Redux,Context API, Next,NextJS,Vercel,Netlify,Firebase,Google Firebase,Sanity,SanityIO,GROQ,Deployment,Angular,Heroku,git,github,nodejs,express,expressjs,npm,yarn,php,C++,c#,mongodb,nosql,sql,mysql,api,business,apps,application,projects,ios,mobile,landing pages,website,DevFlow, aquatics, brand, programming, web developer, fishkeeping, betta, shrimps, aquariums, hardscapping, aquascaping, fitness, gym, lifting, deadlift, squats, bench"
                />
                <meta name="author" content="Jason-Kyle De Lara" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="icon"
                    href="favicon/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="shortcut icon"
                    href="favicon/favicon.ico"
                    type="image/ico"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <NavBar />
            <Hero />

            <Line />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    /* margin: 0px 200px; */
`;
const Line = styled.div`
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
