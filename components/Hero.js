import styles from "../styles/Hero.module.css";
import Subscribe from "../components/Subscribe";
import styled from "styled-components";
// import Image from "next/image";
const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 1080px;
    @media (max-width: 1400px) {
        min-height: 900px;
    }
    @media (max-width: 1200px) {
        min-height: 800px;
    }
    @media (max-width: 1000px) {
        min-height: 700px;
    }
    @media (max-width: 700px) {
        min-height: 500px;
    }
    @media (max-width: 1400px) {
        min-height: 300px;
    }
`;
const ImageDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("hero.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    mix-blend-mode: color-dodge;
`;
const Title = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 26.5%;
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 5px 5px 15px #000;
    letter-spacing: 10px;
    @media (max-width: 1400px) {
        font-size: 2.7rem;
    }
    @media (max-width: 700px) {
        font-size: 1.6rem;
    }
    @media (max-width: 450px) {
        font-size: 1.2rem;
        letter-spacing: 5px;
        padding-top: 15.5%;
    }
`;
const SubTitle = styled.h3`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 35.5%;
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: 300;
    text-shadow: 5px 5px 15px #000;
    letter-spacing: 10px;
    @media (max-width: 1200px) {
        font-size: 1.5rem;
    }
    @media (max-width: 700px) {
        font-size: 1.12rem;
    }
    @media (max-width: 450px) {
        font-size: 0.8rem;
        letter-spacing: 2px;
        padding-top: 25.5%;
    }
`;

export default function Hero() {
    return (
        <Container>
            <ImageDiv />
            <Title>One life. No Regrets.</Title>
            <SubTitle>Make the best of it.</SubTitle>
            <Subscribe />
        </Container>
    );
}
