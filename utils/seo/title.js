import { useRouter } from "next/router";
const capitalizeTheFirstLetterOfEachWord = (words) => {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] =
            separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(" ");
};
const truncate = (title) => {
    if (title.length > 40) return title.substring(0, 40) + "... | ";
    else return title + " | ";
};
export default function generateTitle() {
    const router = useRouter();
    let phrase = "";
    if (
        (router.pathname == "/programming/[slug]" ||
            router.pathname == "/lifting/[slug]" ||
            router.pathname == "/aquatics/[slug]") &&
        router.query.slug
    ) {
        let slug = router.query.slug;
        let num = 0;
        for (let i = 0; i < slug.length - 1; i++) {
            if (slug[i] == "-") num++;
        }
        let newSlug = slug;
        for (let i = 0; i < num; i++) {
            newSlug = newSlug.replace("-", " ");
        }
        phrase = capitalizeTheFirstLetterOfEachWord(newSlug);
    }
    phrase = truncate(phrase);
    phrase = phrase + "DevFlow";

    switch (router.pathname) {
        case "/":
            return "DevFlow - Swim in a development flow";
        case "/programming":
            return "Programming | DevFlow";
        case "/aquatics":
            return "Aquatics | DevFlow";
        case "/lifting":
            return "Lifting | DevFlow";
        case "/contact":
            return "Contact | DevFlow";
        case "/about":
            return "About | DevFlow";
        case "/error":
            return "Error | DevFlow";
        case "/programming/[slug]":
        case "/lifting/[slug]":
        case "/aquatics/[slug]":
            return phrase;
        default:
            return "DevFlow - Swim in a development flow";
    }
}
