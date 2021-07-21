import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import sanityClient from "../utils/client";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Contact.module.css";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/Layout";

const Halves = styled.div`
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
    transition: all 150ms ease-in;
    > h1 {
        font-weight: 900;
        font-size: 2rem;
    }
    > h5 {
        font-size: 1.1rem;
        /* font-weight: 300; */
    }
    > p {
        padding-bottom: 20px;
        font-size: 1.5rem;
        font-weight: 300;
        /* text-transform: uppercase; */
    }
    :hover {
        filter: grayscale(100%);
    }
    @media (max-width: 700px) {
        > h1 {
            font-weight: 900;
            font-size: 1.5rem;
        }
        > h5 {
            font-size: 0.7rem;
            /* font-weight: 300; */
        }
        > p {
            padding-bottom: 20px;
            font-size: 1rem;
            font-weight: 300;
            /* text-transform: uppercase; */
        }
    }
`;
const Sponsors = styled.div`
    height: 100%;
    width: 50%;
    background-color: #667a86;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 40px;
    transition: all 150ms ease-in;
    > h1 {
        font-weight: 900;
        font-size: 2rem;
    }
    > p {
        padding-bottom: 50px;
        font-size: 1.5rem;
        font-weight: 300;
        /* text-transform: uppercase; */
    }
    :hover {
        filter: grayscale(100%);
    }
    :hover::after {
        background-color: rgba(#000, 0.5);
    }
    @media (max-width: 700px) {
        > h1 {
            font-weight: 900;
            font-size: 1.5rem;
        }
        > p {
            padding-bottom: 50px;
            font-size: 0.7rem;
            font-weight: 300;
            /* text-transform: uppercase; */
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
    transition: all 150ms ease-in;
    > p {
        padding-bottom: 50px;
        font-size: 1.5rem;
        font-weight: 500;
        /* text-transform: uppercase; */
    }
    :hover {
        filter: grayscale(100%);
    }
    @media (max-width: 700px) {
        > p {
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 1rem;
            font-weight: 500;
            /* text-transform: uppercase; */
        }
    }
`;
const ListItem = styled.div`
    display: inline;
    margin: 10px;
    * {
        color: white;
    }
    > a {
        width: 100px;
        height: 100px;
    }
    > a > div > svg {
        margin: 10px;
        width: 75% !important;
        height: 75% !important;
        text-align: center;
        transition: all 150ms ease-in;
    }
    > a > div > svg:hover {
        transform: scale(1.05);
        opacity: 1;
        /* box-shadow: 0px 5px 5px #111; */
    }
    @media (max-width: 700px) {
        margin: 0px;
        > a {
            width: 60px !important;
            height: 60px !important;
        }
    }
`;

export default function Contact() {
    return (
        <Layout>
            <div className={styles.container}>
                <NavBar />
                <Halves>
                    <Email>
                        <h1>Contact</h1>
                        <p>
                            Feel Free to contact this email for any business
                            inqueries.
                        </p>
                        <h5>
                            <strong>Email:</strong> jkdelara@thedevflow.com
                        </h5>
                    </Email>
                    <Sponsors>
                        <h1>Sponsors</h1>
                        <p>
                            If you are interested in sponsoring DevFlow videos,
                            please email us for pricing and terms
                        </p>
                    </Sponsors>
                </Halves>
                <Follow>
                    <p>Follow me on these platforms</p>
                    <ul>
                        <ListItem>
                            <SocialIcon
                                bgColor="#fff"
                                url="https://twitter.com/thedevflow"
                            />
                        </ListItem>
                        <ListItem>
                            <SocialIcon
                                bgColor="#fff"
                                url="https://facebook.com/thedevflow"
                            />
                        </ListItem>
                        <ListItem>
                            <SocialIcon
                                bgColor="#fff"
                                url="https://instagram.com/thedevflow"
                            />
                        </ListItem>
                        <ListItem>
                            <SocialIcon
                                bgColor="#fff"
                                url="https://youtube.com/channel/UCWzJk743eDpkpQaVbY2YsPw"
                            />
                        </ListItem>
                        <ListItem>
                            <SocialIcon
                                bgColor="#fff"
                                url="https://linkedin.com/jkdelara"
                            />
                        </ListItem>
                        <ListItem>
                            <SocialIcon
                                bgColor="#fff"
                                url="https://github.com/xjkbro"
                            />
                        </ListItem>
                    </ul>
                </Follow>
                <Footer />
            </div>
        </Layout>
    );
}
