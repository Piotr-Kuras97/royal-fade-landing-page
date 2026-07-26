import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ServiceCard.scss";

import type { Service } from "./ServiceCard.types";

interface ServiceCardProps {
    service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    return (
        <article className="service-card">

            {service.featured && (
                <span className="service-card__badge">
                    BESTSELLER
                </span>
            )}

            <div className="service-card__icon">
                <FontAwesomeIcon icon={service.icon} />
            </div>

            <h3 className="service-card__title">
                {service.title}
            </h3>

            <p className="service-card__description">
                {service.description}
            </p>

            <div className="service-card__divider" />

            <span className="service-card__price">
                {service.price}
            </span>

        </article>
    );
};

export default ServiceCard;