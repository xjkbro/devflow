import styles from "../styles/Hero.module.css";
import Subscribe from "../components/Subscribe";
// import Image from "next/image";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.divImage}></div>
            {/* <img className={styles.heroImage} src="hero.jpg" /> */}
            <h1 className={styles.title}>One life. No Regrets.</h1>
            <h3 className={styles.subtitle}>Make the best of it.</h3>

            <Subscribe />
            {/* <div className={styles.subscribe}>
                <input type="text" placeholder="EMAIL" />
                <button>SUBSCRIBE</button>
            </div> */}
        </div>
    );
}
