import type { Transition } from "motion/react";

export const SPRING_TRANSITION: Transition = {
    type: "spring",
    stiffness: 320,
    damping: 30,
};

export const DEFAULT_TRANSITION: Transition = {
    duration: 0.35,
    ease: "easeOut",
};
