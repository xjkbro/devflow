import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Head from "next/head";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import OpacityIcon from "@material-ui/icons/Opacity";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
// import YoutubeSubscribeButton from "deku-youtube-subscribe-button";
import styles from "../styles/NavBar.module.css";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});

export default function NavBar() {
    const classes = useStyles();
    const [menu, setMenu] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setMenu(open);
    };
    const list = () => (
        <div
            className={styles.menuDrawer}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Link href="/">
                    <ListItem button key={"Home"}>
                        <Image
                            src="/images/DevFlow Logo - White.png"
                            height={174}
                            width={348}
                            style={{ display: "block" }}
                        />
                    </ListItem>
                </Link>
                <Link href="/">
                    <ListItem button key={"Home"}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                </Link>
                <Link href="/about">
                    <ListItem button key={"About"}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={"About"} />
                    </ListItem>
                </Link>
                <Link href="/programming">
                    <ListItem button key={"Programming"}>
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Programming"} />
                    </ListItem>
                </Link>
                <Link href="/lifting">
                    <ListItem button key={"Lifting"}>
                        <ListItemIcon>
                            <FitnessCenterIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Lifting"} />
                    </ListItem>
                </Link>
                <Link href="/aquatics">
                    <ListItem button key={"Aquatics"}>
                        <ListItemIcon>
                            <OpacityIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Aquatics"} />
                    </ListItem>
                </Link>
                <Link href="/contact">
                    <ListItem button key={"Contact"}>
                        <ListItemIcon>
                            <ImportContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Contact"} />
                    </ListItem>
                </Link>
            </List>
        </div>
    );
    return (
        <header>
            <div className={styles.mobileContainer}>
                <Image
                    src="/images/DevFlow Logo - White.png"
                    height={174}
                    width={348}
                />
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </Button>
                <Drawer open={menu} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </div>
            <div className={styles.container}>
                <nav className={styles.navigation}>
                    <Link href="/">
                        <Image
                            src="/images/DevFlow Logo - White.png"
                            height={174}
                            width={348}
                        />
                    </Link>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/programming">Programming</Link>
                    <Link href="/lifting">Lifting</Link>
                    <Link href="/aquatics">Aquatics</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <div className={styles.social}>
                    <Link href="https://www.twitter.com/thedevflow">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://www.facebook.com/thedevflow">
                        <FacebookIcon />
                    </Link>
                    <Link href="https://instagram.com/thedevflow">
                        <InstagramIcon />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCWzJk743eDpkpQaVbY2YsPw">
                        {/* <YoutubeSubscribeButton channel-id="UCWzJk743eDpkpQaVbY2YsPw" /> */}
                        <YouTubeIcon />
                    </Link>
                </div>
            </div>
        </header>
    );
}
