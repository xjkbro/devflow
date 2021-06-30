import styled from "styled-components";
// import Image from "next/image";

export default function Hero() {
    return (
        <Container>
            <Image src="hero.jpg" />
            {/* width={1520} height={1216}  */}
            <HeroContext>
                <Title>One life. No Regrets.</Title>
                <SubTitle>Make the best of it.</SubTitle>
            </HeroContext>
            {/* <Sub>
                <input type="text" placeholder="EMAIL" />
                <button>SUBSCRIBE</button>
            </Sub> */}
        </Container>
    );
}

const Container = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`;
const Image = styled.img`
    /* width: 1500px;
    height: 1216px; */
    width: 100%;
    height: 100%;
    mix-blend-mode: color-dodge;
    @media (max-width: 700px) {
    }
`;
const HeroContext = styled.div``;
const Title = styled.h1`
    position: absolute;
    top: 500px;
    right: 450px;
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 5px 5px 15px #000;
    letter-spacing: 10px;
    @media (max-width: 700px) {
        top: 200px;
        left: 20px;
        font-size: 1rem;
    }
`;
const SubTitle = styled.h3`
    position: absolute;
    top: 600px;
    right: 700px;
    font-size: 2rem;
    font-weight: 300;
    text-shadow: 5px 5px 15px #000;
    letter-spacing: 10px;
`;
const Sub = styled.div`
    position: absolute;
    bottom: 100px;
    right: 600px;
    > input {
        height: 50px;
        width: 500px;
        color: #061922;
        padding: 0 10px;
        outline: none;
    }
    > button {
        background-color: #061922;
        padding: 15px;
    }
    /* height: 300px;
    width: 100vw;
    background-color: white; */
    /* bottom: -500px;
    left: 0; */
`;
