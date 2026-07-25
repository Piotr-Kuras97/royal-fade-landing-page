import Button from "../../ui/Button/Button";

import "./PricingCTA.scss";

import { useNavigate } from "react-router-dom";

function PricingCTA() {

    const navigate = useNavigate();
    const handleAppointmentClick = () => {
        navigate("/", {
            state: {
            targetSection: "#contact",
            },
        });
        };
    return (
        <section className="pricing-cta">
        <h2 className="pricing-cta__title">
            Gotowy na nową fryzurę?
        </h2>

        <p className="pricing-cta__text">
            Umów wizytę i oddaj się w ręce doświadczonych barberów Royal Fade.
        </p>

        <Button onClick={handleAppointmentClick}>
            Umów wizytę
        </Button>
        </section>
    );
}

export default PricingCTA;