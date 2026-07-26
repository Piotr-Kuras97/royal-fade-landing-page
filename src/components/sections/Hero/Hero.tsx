import "./Hero.scss";
import Button from "../../ui/Button/Button";
import barberImage from "../../../assets/images/barber-photo.jpg";

import { useBooking } from "../../../context/BookingContext";

const Hero = () => {
  const { openBooking } = useBooking();

  const scrollToServices = () => {
    document
        .getElementById("services")
        ?.scrollIntoView({
            behavior: "smooth",
        });
  };

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__content">

        <div className="hero__subtitle">
            <span></span>
            <p>Premium Barber Shop</p>
        </div>

        <h1 className="hero__title" id="hero-title">
            Royal <span>Fade</span>
        </h1>

        <p className="hero__description">
            Tworzymy fryzury, które podkreślają charakter.
            Klasyczne cięcia, nowoczesne fade'y i pielęgnacja brody
            na najwyższym poziomie.
        </p>

        <div className="hero__buttons">
        <Button
            onClick={openBooking}>
            Umów wizytę
        </Button>

        <Button 
            variant="secondary"
            onClick={scrollToServices}
            >
            Nasze usługi
        </Button>
        </div>

        </div>

        <div className="hero__image">
            <img src={barberImage} alt="Barber w salonie Royal Fade" />
        </div>

      </div>
    </section>
  );
}

export default Hero;