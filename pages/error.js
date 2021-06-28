import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import sanityClient from "../utils/client";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Error() {
    return (
        <Container>
            <NavBar />
            <ErrorDiv>404 Not Found</ErrorDiv>
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
const ErrorDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 3rem;
`;
