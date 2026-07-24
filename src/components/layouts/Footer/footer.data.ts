import {
    faFacebookF,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import type {
    FooterNavigationItem,
    FooterSocialItem
} from "./footer.types";

export const footerNavigation: FooterNavigationItem[] = [
    {
        id: 1,
        label: "Start",
        href: "#hero"
    },
    {
        id: 2,
        label: "O nas",
        href: "#about"
    },
    {
        id: 3,
        label: "Usługi",
        href: "#services"
    },
    {
        id: 4,
        label: "Opinie",
        href: "#testimonials"
    },
    {
        id: 5,
        label: "Kontakt",
        href: "#contact"
    }
];

export const footerSocials: FooterSocialItem[] = [
    {
        id: 1,
        icon: faInstagram,
        href: "#",
        ariaLabel: "Instagram"
    },
    {
        id: 2,
        icon: faFacebookF,
        href: "#",
        ariaLabel: "Facebook"
    }
];