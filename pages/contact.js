import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import sanityClient from "../utils/client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return (
        <Container>
            <NavBar />
            <Parts>
                <Email>
                    <h1>Contact</h1>
                    <p>
                        Feel Free to contact this email for any business
                        inqueries.
                    </p>
                    <h5>
                        <strong>Email:</strong> jkdelara@devflow.com
                    </h5>
                </Email>
                <Sponsor>
                    <h1>Sponsors</h1>
                    <p>
                        If you are interested in sponsoring DevFlow videos,
                        please email us for pricing and terms
                    </p>
                </Sponsor>
            </Parts>
            <Follow>
                <p>Follow me on these platforms</p>
                <List>
                    <ListItem>
                        <SocialIcon
                            style={{ height: 100, width: 100 }}
                            bgColor="#fff"
                            url="https://twitter.com/devflow"
                        />
                    </ListItem>
                    <ListItem>
                        <SocialIcon
                            style={{ height: 100, width: 100 }}
                            bgColor="#fff"
                            url="https://facebook.com/devflow"
                        />
                    </ListItem>
                    <ListItem>
                        <SocialIcon
                            style={{ height: 100, width: 100 }}
                            bgColor="#fff"
                            url="https://instagram.com/thedevflow"
                        />
                    </ListItem>
                    <ListItem>
                        <SocialIcon
                            style={{ height: 100, width: 100 }}
                            bgColor="#fff"
                            url="https://youtube.com/channel/UCWzJk743eDpkpQaVbY2YsPw"
                        />
                    </ListItem>
                    <ListItem>
                        <SocialIcon
                            style={{ height: 100, width: 100 }}
                            bgColor="#fff"
                            url="https://linkedin.com/jkdelara"
                        />
                    </ListItem>
                    <ListItem>
                        <SocialIcon
                            style={{ height: 100, width: 100 }}
                            bgColor="#fff"
                            url="https://github.com/xjkbro"
                        />
                    </ListItem>
                </List>
            </Follow>
            <Footer />
        </Container>
    );
}
const Container = styled.div``;
const Parts = styled.div`
    height: 300px;
    width: 100%;
    display: inline-flex;
`;
const Email = styled.div`
    height: 100%;
    width: 50%;
    background-color: #85b1cc;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 40px;
    h1 {
        font-weight: 900;
        font-size: 2rem;
    }
    p {
        padding-bottom: 20px;
        font-size: 1.5rem;
        font-weight: 300;
        /* text-transform: uppercase; */
    }
    h5 {
        font-size: 1.1rem;
        /* font-weight: 300; */
    }
    transition: all 150ms ease-in;
    :hover {
        filter: grayscale(100%);
    }
`;
const Sponsor = styled.div`
    /* height: 300px; */
    height: 100%;
    width: 50%;
    background-color: #667a86;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 40px;
    h1 {
        font-weight: 900;
        font-size: 2rem;
    }
    p {
        padding-bottom: 50px;
        font-size: 1.5rem;
        font-weight: 300;
        /* text-transform: uppercase; */
    }
    transition: all 150ms ease-in;
    :hover {
        filter: grayscale(100%);
        :after {
            background-color: rgba(#000, 0.5);
        }
    }
`;
const Follow = styled.div`
    height: 300px;
    background-color: #503b4a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        padding-bottom: 50px;
        font-size: 1.5rem;
        font-weight: 500;
        /* text-transform: uppercase; */
    }
    transition: all 150ms ease-in;
    :hover {
        filter: grayscale(100%);
    }
`;
const List = styled.ul``;
const ListItem = styled.li`
    display: inline;
    margin: 10px;
    * {
        color: white;
    }
    a > div > svg {
        margin: 10px;
        width: 75% !important;
        height: 75% !important;
        text-align: center;
        transition: all 150ms ease-in;
        :hover {
            transform: scale(1.05);
            opacity: 1;
            /* box-shadow: 0px 5px 5px #111; */
        }
    }
`;
