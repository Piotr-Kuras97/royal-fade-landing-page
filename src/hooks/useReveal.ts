import { useEffect, useRef, useState } from "react";

const useReveal = () => {
    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return {
        ref,
        isVisible,
    };
};

export default useReveal;