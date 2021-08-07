import NavBar from "../components/NavBar";
import styled from "styled-components";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
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

const Container = styled.div``;
const Line = styled.div`
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
