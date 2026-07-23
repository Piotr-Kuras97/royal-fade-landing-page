import { useEffect, useState } from "react";

interface UseCountUpProps {
    end: number;
    startAnimation: boolean;
    duration?: number;
    delay: number
}

const useCountUp = ({
    end,
    startAnimation,
    duration = 1500,
    delay = 0
}: UseCountUpProps) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return;
        const startTime = performance.now();
        let animationFrameId: number;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(progress * end);

            setCount(currentValue);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        const startAnimationFrame = () => {
            animationFrameId = requestAnimationFrame(animate);
        };
        if (delay > 0) {
            const timeoutId = window.setTimeout(startAnimationFrame, delay);

            return () => {
                clearTimeout(timeoutId);
                cancelAnimationFrame(animationFrameId);
            };
        }

        startAnimationFrame();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [end, startAnimation]);

    return count;
};

export default useCountUp;