import { useRouter } from "next/router";

export default function generateAuthor(article) {
    const router = useRouter();
    switch (router.pathname) {
        case "/":
        case "/programming":
        case "/aquatics":
        case "/lifting":
        case "/contact":
        case "/about":
        case "/error":
            return "DevFlow";
        case "/programming/[slug]":
        case "/lifting/[slug]":
        case "/aquatics/[slug]":
            return article?.name;
        default:
            return "DevFlow";
    }
}
