import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ article, children }) {
    const router = useRouter();
    function capitalizeTheFirstLetterOfEachWord(words) {
        var separateWord = words.toLowerCase().split(" ");
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] =
                separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(" ");
    }
    const findPage = () => {
        console.log(router);
        switch (router.pathname) {
            case "/":
                return "";
            case "/programming":
                return "Programming | ";
            case "/aquatics":
                return "Aquatics | ";
            case "/lifting":
                return "Lifting | ";
            case "/contact":
                return "Contact | ";
            case "/about":
                return "About | ";
            case "/error":
                return "Error | ";
            case "/programming/[slug]":
            case "/lifting/[slug]":
            case "/aquatics/[slug]":
                return article.title + " | ";

            default:
                return "";
            // code block
        }
    };
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{findPage()}DevFlow</title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="DevFlow is a project that doubles as a brand and a personality. DevFlow is known to provide educational and entertainment value by producing content that involved teaching others programming, showing my journey as a Web Developer, showcasing my love for Aquariums and fishkeeping and share my fitness goals and aspirations."
                />
                <meta
                    name="keywords"
                    content="HTML,CSS,JavaScript,ES6,TailwindCSS,Bootstrap,React,ReactJS,Redux,Context API, Next,NextJS,Vercel,Netlify,Firebase,Google Firebase,Sanity,SanityIO,GROQ,Deployment,Angular,Heroku,git,github,nodejs,express,expressjs,npm,yarn,php,C++,c#,mongodb,nosql,sql,mysql,api,business,apps,application,projects,ios,mobile,landing pages,website,DevFlow, aquatics, brand, programming, web developer, fishkeeping, betta, shrimps, aquariums, hardscapping, aquascaping, fitness, gym, lifting, deadlift, squats, bench"
                />
                <meta name="author" content="Jason-Kyle De Lara" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="icon"
                    href="favicon/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="shortcut icon"
                    href="favicon/favicon.ico"
                    type="image/ico"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <main>{children}</main>
        </>
    );
}
