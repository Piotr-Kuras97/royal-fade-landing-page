import ServiceCard from "./ServiceCard/ServiceCard";
import { services } from "./services.data";
import "./Services.scss";

import clsx from "clsx";

import useReveal from "../../../hooks/useReveal";
import Button from "../../ui/Button/Button";
import { NavLink } from "react-router-dom";

const Services = () => {
    const { ref, isVisible } = useReveal();

    return (
        <section
            id="services"
            className="services"
            aria-labelledby="services-title"
        >

            <div
                ref={ref}
                className={clsx("container", "reveal", {
                    "reveal--visible": isVisible,
                })}
            >

                <div className="services__container">

                    <div className="services__header">

                        <div className="services__subtitle">
                            <span></span>
                            <p>Nasze usługi</p>
                        </div>

                        <h2 className="services__title">
                            Wszystko czego potrzebujesz
                            w jednym miejscu
                        </h2>

                        <p className="services__description">
                            Oferujemy kompleksowe usługi barberskie,
                            łącząc doświadczenie, najwyższej jakości kosmetyki
                            oraz indywidualne podejście do każdego klienta.
                        </p>

                        <div className="services__accent">
                            <span></span>
                            <div></div>
                            <span></span>
                        </div>
                    </div>

                        <div className="services__grid">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                />
                            ))}
                        </div>
                        <div className="services__pricing">
                            <p className="services__pricing-text">
                                Nie znalazłeś interesującej Cię usługi?
                            </p>
                            <NavLink
                                to="/pricing"
                                className="services__pricing-link"
                            >
                                <Button variant="secondary">
                                    Zobacz pełny cennik
                                </Button>
                            </NavLink>
                        </div>
                </div>
            </div>

        </section>
        )
}

export default Services;