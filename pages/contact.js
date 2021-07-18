import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import sanityClient from "../utils/client";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Contact.module.css";
import Head from "next/head";

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact | DevFlow</title>
            </Head>
            <NavBar />
            <div className={styles.halves}>
                <div className={styles.email}>
                    <h1>Contact</h1>
                    <p>
                        Feel Free to contact this email for any business
                        inqueries.
                    </p>
                    <h5>
                        <strong>Email:</strong> jkdelara@thedevflow.com
                    </h5>
                </div>
                <div className={styles.sponsor}>
                    <h1>Sponsors</h1>
                    <p>
                        If you are interested in sponsoring DevFlow videos,
                        please email us for pricing and terms
                    </p>
                </div>
            </div>
            <div className={styles.follow}>
                <p>Follow me on these platforms</p>
                <ul>
                    <li className={styles.listItem}>
                        <SocialIcon
                            bgColor="#fff"
                            url="https://twitter.com/thedevflow"
                        />
                    </li>
                    <li className={styles.listItem}>
                        <SocialIcon
                            bgColor="#fff"
                            url="https://facebook.com/thedevflow"
                        />
                    </li>
                    <li className={styles.listItem}>
                        <SocialIcon
                            bgColor="#fff"
                            url="https://instagram.com/thedevflow"
                        />
                    </li>
                    <li className={styles.listItem}>
                        <SocialIcon
                            bgColor="#fff"
                            url="https://youtube.com/channel/UCWzJk743eDpkpQaVbY2YsPw"
                        />
                    </li>
                    <li className={styles.listItem}>
                        <SocialIcon
                            bgColor="#fff"
                            url="https://linkedin.com/jkdelara"
                        />
                    </li>
                    <li className={styles.listItem}>
                        <SocialIcon
                            bgColor="#fff"
                            url="https://github.com/xjkbro"
                        />
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}
