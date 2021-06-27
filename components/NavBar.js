import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Head from "next/head";

export default function NavBar() {
    return (
        <header>
            <Head>
                <title>DevFlow</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavContainer>
                <Navigation>
                    <Link href="/">
                        <Image
                            src="/images/DevFlow Logo - BG.png"
                            height={174}
                            width={348}
                        />
                    </Link>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/programming">Programming</Link>
                    <Link href="/aquatics">Aquatics</Link>
                    <Link href="/contact">Contact</Link>
                </Navigation>
                <Social>
                    <Link href="https://www.google.com">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://www.google.com">
                        <FacebookIcon />
                    </Link>
                    <Link href="https://www.google.com">
                        <InstagramIcon />
                    </Link>
                    <Link href="https://www.google.com">
                        <YouTubeIcon />
                    </Link>
                </Social>
            </NavContainer>
        </header>
    );
}

const NavContainer = styled.div`
    height: 174px;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    background-color: #061922;
`;
const Navigation = styled.nav`
    vertical-align: middle;
    display: inline-flex;
    > div > img {
        cursor: pointer;
    }
    > a {
        padding: 0 10px;
        margin: auto 0px;
        transition: color 100ms ease-in;
        :hover {
            transform: scale(1.05);
            color: gray;
            opacity: 1;
        }
    }
`;
const Social = styled.div`
    display: inline-flex;
    cursor: pointer;
    > * {
        width: 10px;
        margin: auto;
        padding: 0 10px;
    }
    .MuiSvgIcon-root {
        width: 2em;
        transition: color 100ms ease-in;
        :hover {
            transform: scale(1.05);
            color: gray;
            opacity: 1;
        }
    }
`;
