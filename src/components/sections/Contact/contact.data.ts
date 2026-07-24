import {
    faLocationDot,
    faPhone,
    faEnvelope,
    faClock
} from "@fortawesome/free-solid-svg-icons";

import type { ContactInfoItem } from "./ContactInfo/contact-info.types";

export const contactInfo: ContactInfoItem[] = [
    {
        id: 1,
        icon: faLocationDot,
        title: "Adres",
        value: "ul. Floriańska 12, Kraków",
        href: "https://maps.google.com/?q=ul.+Floriańska+12,+Kraków"
    },
    {
        id: 2,
        icon: faPhone,
        title: "Telefon",
        value: "+48 123 456 789",
        href: "tel:+48123456789"
    },
    {
        id: 3,
        icon: faEnvelope,
        title: "E-mail",
        value: "kontakt@royalfade.pl",
        href: "mailto:kontakt@royalfade.pl"
    },
    {
        id: 4,
        icon: faClock,
        title: "Godziny otwarcia",
        value: "Pon. - Sob. 09:00 - 20:00"
    }
];