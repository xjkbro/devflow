import "tailwindcss/tailwind.css";
import styled from "styled-components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        // <Container>
        <Component {...pageProps} />
        // </Container>
    );
}

export default MyApp;
