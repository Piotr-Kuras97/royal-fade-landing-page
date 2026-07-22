import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface FooterNavigationItem {
    id: number;
    label: string;
    href: string;
}

export interface FooterSocialItem {
    id: number;
    icon: IconDefinition;
    href: string;
    ariaLabel: string;
}