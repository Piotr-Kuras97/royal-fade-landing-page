import {
    faScissors,
    faUser,
    faChild,
    faSprayCanSparkles,
    faCrown
} from "@fortawesome/free-solid-svg-icons";

export const services = [
    {
        id: 1,
        icon: faScissors,
        title: "Strzyżenie",
        description:
            "Profesjonalne strzyżenie dopasowane do kształtu twarzy i stylu.",
        price: "od 80 zł",
        featured: false
    },
    {
        id: 2,
        icon: faUser,
        title: "Broda",
        description:
            "Modelowanie oraz pielęgnacja brody z użyciem najwyższej jakości kosmetyków.",
        price: "od 50 zł",
        featured: false
    },
    {
        id: 3,
        icon: faChild,
        title: "Dzieci",
        description:
            "Komfortowe strzyżenie najmłodszych klientów w przyjaznej atmosferze.",
        price: "od 60 zł",
        featured: false
    },
    {
        id: 4,
        icon: faSprayCanSparkles,
        title: "Stylizacja",
        description:
            "Profesjonalna stylizacja włosów z wykorzystaniem premium produktów.",
        price: "od 40 zł",
        featured: false
    },
    {
        id: 5,
        icon: faCrown,
        title: "Pakiet Premium",
        description:
            "Kompleksowa usługa obejmująca włosy, brodę oraz pielęgnację.",
        price: "od 120 zł",
        featured: true
    }
];