import "tailwindcss/tailwind.css";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    );
}

const Container = styled.div`
    color: white;
    background-color: #061922;
`;
export default MyApp;
