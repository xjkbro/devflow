import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function Footer() {
    return (
        <footer>
            <FooterContainer>
                <FooterLinks>
                    <Link href="/">Home</Link>
                    <Link href="/">News</Link>
                    <Link href="/">Teams</Link>
                    <Link href="/">Partners</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/">FAQ</Link>
                    <Link href="/">Privacy</Link>
                    <Link href="/">TOS</Link>
                </FooterLinks>
                <Social>
                    <Link href="https://www.twitter.com/devflow">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://www.facebook.com/devflow">
                        <FacebookIcon />
                    </Link>
                    <Link href="https://instagram.com/thedevflow">
                        <InstagramIcon />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCWzJk743eDpkpQaVbY2YsPw">
                        <YouTubeIcon />
                    </Link>
                </Social>
            </FooterContainer>
            <Copyright>© 1995-2021 | Jason-Kyle De Lara</Copyright>
        </footer>
    );
}

const FooterContainer = styled.div`
    height: 100px;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    background-color: #061922;
`;
const FooterLinks = styled.nav`
    vertical-align: middle;
    display: inline-flex;
    > a {
        padding: 0 10px;
        margin: auto 0px;
    }
    @media (max-width: 700px) {
        font-size: 0.4em;
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
    }
    @media (max-width: 1200px) {
        display: none;
    }
`;
const Copyright = styled.div`
    margin: auto;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
    padding-bottom: 20px;
    @media (max-width: 700px) {
        font-size: 0.4em;
    }
`;
