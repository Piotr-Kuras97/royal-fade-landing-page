import Button from "../../ui/Button/Button";

import "./PricingCTA.scss";

import { useBooking } from "../../../context/BookingContext";

const PricingCTA = () => {
    const { openBooking } = useBooking();

    return (
        <div className="pricing-cta">
            <h2 className="pricing-cta__title">
                Gotowy na nową fryzurę?
            </h2>

            <p className="pricing-cta__text">
                Umów wizytę i oddaj się w ręce doświadczonych barberów Royal Fade.
            </p>

            <Button onClick={openBooking}>
                Umów wizytę
            </Button>
        </div>
    );
}

export default PricingCTA;