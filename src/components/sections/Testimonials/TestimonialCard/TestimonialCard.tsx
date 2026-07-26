import "./TestimonialCard.scss";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft  } from "@fortawesome/free-solid-svg-icons";

import type { Testimonial } from "./testimonial-card.types";

export interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
    onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
}

const TestimonialCard = ({testimonial,className,onTransitionEnd }: TestimonialCardProps) => {
    return (
        <article
            className={clsx(
                "testimonial-card",
                className
            )}
            onTransitionEnd={onTransitionEnd}
        >

            <div className="testimonial-card__quote">

                <FontAwesomeIcon icon={faQuoteLeft} />

            </div>

            <div className="testimonial-card__rating" aria-label={`${testimonial.rating} na 5 gwiazdek`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        aria-hidden="true"
                    />
                ))}
            </div>

            <p className="testimonial-card__text">
                "{testimonial.text}"
            </p>

            <div className="testimonial-card__author">

                <img
                    src={testimonial.image}
                    alt={`Zdjęcie klienta ${testimonial.name}`}
                    className="testimonial-card__image"
                />

                <div className="testimonial-card__info">

                    <h3 className="testimonial-card__name">
                        {testimonial.name}
                    </h3>

                    <span className="testimonial-card__role">
                        {testimonial.role}
                    </span>

                </div>

            </div>

        </article>
    );
};

export default TestimonialCard;