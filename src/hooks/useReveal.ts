import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
    threshold?: number;
    rootMargin?: string;
};

const useReveal = ({
    threshold = 0,
    rootMargin = "0px 0px -80px 0px",
}: UseRevealOptions = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { ref, isVisible };
};

export default useReveal;