import Link from "next/link";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <nav className={styles.footerNav}>
                    <Link href="/">Home</Link>
                    <Link href="/">News</Link>
                    <Link href="/">Teams</Link>
                    <Link href="/">Partners</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/">FAQ</Link>
                    <Link href="/">Privacy</Link>
                    <Link href="/">TOS</Link>
                </nav>
                <div className={styles.social}>
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
                </div>
            </div>
            <div className={styles.copyright}>
                © 1995-2021 | Jason-Kyle De Lara
            </div>
        </footer>
    );
}
