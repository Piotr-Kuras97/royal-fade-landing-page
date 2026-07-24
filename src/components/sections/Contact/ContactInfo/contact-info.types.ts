import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactInfoItem {
    id: number;
    icon: IconDefinition;
    title: string;
    value: string;
    href?: string;
}