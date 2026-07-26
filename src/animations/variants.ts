import type { Variants } from "motion/react";


export const fadeVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

export const modalVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 30,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 30,
    },
};

