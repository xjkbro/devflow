import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import sanityClient from "../utils/client";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <Container>
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
