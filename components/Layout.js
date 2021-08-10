import Head from "next/head";
import { useRouter } from "next/router";
import generateTitle from "../utils/seo/title";
import generateDescription from "../utils/seo/description";
import generateAuthor from "../utils/seo/author";

export default function Layout({ article, children }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{generateTitle()}</title>
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content={generateDescription(article)}
                />
                <meta
                    name="keywords"
                    content="devflow, thedevflow, HTML, CSS, JavaScript, ES6, TailwindCSS,Bootstrap,React,ReactJS,Redux,Context API, Next,NextJS,Vercel,Netlify,Firebase,Google Firebase,Sanity,SanityIO,GROQ,Deployment,Angular,Heroku,git,github,nodejs,express,expressjs,npm,yarn,php,C++,c#,mongodb,nosql,sql,mysql,api,business,apps,application,projects,ios,mobile,landing pages,website,DevFlow, aquatics, brand, programming, web developer, fishkeeping, betta, shrimps, aquariums, hardscapping, aquascaping, fitness, gym, lifting, deadlift, squats, bench"
                />
                <meta property="og:site_name" content="devflow" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta name="author" content={generateAuthor(article)} />
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
                <link rel="manifest" href="/favicon/site.webmanifest"></link>
            </Head>
            <main>{children}</main>
        </>
    );
}
