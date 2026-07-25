import "./Pricing.scss";

import PriceCategory from "../../components/pricing/PriceCategory";
import { pricing } from "../../data/pricing";
import PricingCTA from "../../components/pricing/PricingCTA/PricingCTA";

import useReveal from "../../hooks/useReveal";
import clsx from "clsx";

function Pricing() {
    const { ref, isVisible } = useReveal();

    return (
        <section className="pricing" id="pricing">
            <div 
                ref={ref}
                className={clsx("pricing__container", "reveal", {
                    "reveal--visible": isVisible,
                })}
            >
                <div className="pricing__header">
                <h1 className="pricing__title">Cennik</h1>

                <div className="pricing__divider" />

                <p className="pricing__subtitle">
                    Poznaj pełną ofertę usług Royal Fade i wybierz wariant idealny dla siebie.
                </p>
                </div>

                <div className="pricing__categories">
                {pricing.map((category) => (
                    <PriceCategory
                    key={category.title}
                    title={category.title}
                    services={category.services}
                    />
                ))}
                </div>
                <PricingCTA />
            </div>
        </section>
    );
}

export default Pricing;