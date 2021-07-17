import "tailwindcss/tailwind.css";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme = {
    colors: {
        primary: "#333",
    },
};
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
