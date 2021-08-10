import { useRouter } from "next/router";

const truncate = (desc) => {
    if (desc.length > 156) return desc.substring(0, 155) + "...";
    else return desc;
};
export default function generateDescription(article) {
    const router = useRouter();
    console.log(article);
    console.log(router);
    const description =
        "DevFlow is a project that doubles as a brand and a personality. DevFlow is known to provide educational and entertainment value by producing content that involves teaching others programming, showing my journey as a Web Developer, showcasing my love for Aquariums and fishkeeping and share my fitness, journey goals and aspirations.";
    let phrase = "Hellow";
    if (article?.summary) phrase = truncate(article.summary);

    phrase = truncate(phrase);

    switch (router.pathname) {
        case "/":
        case "/contact":
        case "/about":
        case "/error":
            return description;
        case "/programming":
            return "DevFlow provides educational and entertainment value by producing content that involves teaching others with programming courses, development tips, tutorials and informational blog posts.";
        case "/aquatics":
            return "DevFlow provides educational and entertainment value by producing content that involves teaching others about aquatics and fishkeeping from tips to tutorials with informational blog posts.";
        case "/lifting":
            return "DevFlow provides educational and entertainment value by producing content that involves teaching others about lifting and living a healthier lifestyle with informational blog posts about my goals and how I have achieved and will continue to achieve them ";
        case "/programming/[slug]":
        case "/lifting/[slug]":
        case "/aquatics/[slug]":
            return phrase;
        default:
            return description;
    }
}
