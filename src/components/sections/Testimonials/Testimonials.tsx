import { useState } from "react";

import "./Testimonials.scss";

import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "./Testimonials.data";

import clsx from "clsx";

import useReveal from "../../../hooks/useReveal";

const Testimonials = () => {
    const { ref, isVisible } = useReveal();

    type AnimationPhase = "idle" | "leaving" | "entering";

    const [currentIndex, setCurrentIndex] = useState(0);
    const [pendingIndex, setPendingIndex] = useState<number | null>(null);
    const [animationPhase, setAnimationPhase] =
        useState<AnimationPhase>("idle");

    const currentTestimonial = testimonials[currentIndex];

    const changeTestimonial = (newIndex: number) => {
        if (animationPhase !== "idle") return;
        setPendingIndex(newIndex);
        setAnimationPhase("leaving");
    };

    const handleTransitionEnd = () => {

        if (animationPhase === "leaving") {
            if (pendingIndex === null) return;
            setCurrentIndex(pendingIndex);
            setPendingIndex(null);
            setAnimationPhase("entering");
            return;
        }

        if (animationPhase === "entering") {
            setAnimationPhase("idle");
        }

    };

    const handleNext = () => {
        const nextIndex =
            (currentIndex + 1) % testimonials.length;
        changeTestimonial(nextIndex);
    };

    const handlePrevious = () => {
        const previousIndex =
            (currentIndex - 1 + testimonials.length)
            % testimonials.length;
        changeTestimonial(previousIndex);
    };

    return (
        <section
            id="testimonials"
            className="testimonials"
            aria-labelledby="testimonials-title"
        >

            <div
                ref={ref}
                className={clsx("container", "reveal", {
                    "reveal--visible": isVisible,
                })}
            >

                <div className="container testimonials__container">

                    <span className="testimonials__subtitle">
                        Opinie
                    </span>

                    <h2 className="testimonials__title" id="testimonials-title">
                        Co mówią nasi klienci
                    </h2>

                    <p className="testimonials__description">
                        Poznaj opinie osób, które regularnie odwiedzają Royal Fade i przekonaj się, dlaczego tak wielu klientów wraca do nas przy każdej kolejnej wizycie.
                    </p>

                    <div className="testimonials__slider">
                    <TestimonialCard
                        testimonial={currentTestimonial}
                        className={
                            animationPhase === "leaving"
                                ? "testimonial-card--fade"
                                : undefined
                        }
                        onTransitionEnd={handleTransitionEnd}
                    />

                        <div className="testimonials__navigation">

                            <button
                                className="testimonials__arrow"
                                onClick={handlePrevious}
                                aria-label="Poprzednia opinia"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>

                            <button
                                className="testimonials__arrow"
                                onClick={handleNext}
                                aria-label="Następna opinia"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>

                        </div>

                    </div>

                    <div className="testimonials__dots">

                        {testimonials.map((testimonial, index) => (

                            <button
                                key={testimonial.id}
                                className={`testimonials__dot ${
                                    currentIndex === index ? "testimonials__dot--active" : ""
                                }`}
                                onClick={() => changeTestimonial(index)}
                                aria-label={`Przejdź do opinii ${index + 1}`}
                                aria-current={currentIndex === index}
                            />

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Testimonials;