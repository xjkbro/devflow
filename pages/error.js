import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Error() {
    return (
        <div>
            <Head>
                <title>Error | DevFlow</title>
            </Head>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: "3rem",
                }}
            >
                404 Not Found
            </div>
            <div
                style={{
                    marginTop: "30px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            ></div>
            <Footer />
        </div>
    );
}
