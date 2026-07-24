import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Service {

    id: number;

    icon: IconDefinition;

    title: string;

    description: string;

    price: string;

    featured: boolean;
}