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
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <Container>
                <NavBar />
                <Hero />

                <Line />
                <Footer />
            </Container>
        </Layout>
    );
}

const Container = styled.div`
    /* margin: 0px 200px; */
`;
const Line = styled.div`
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
