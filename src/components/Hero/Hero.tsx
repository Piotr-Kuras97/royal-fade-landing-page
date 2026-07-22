import "./Hero.scss";
import Button from "../ui/Button/Button";
import barberImage from "../../assets/images/barber-photo.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">

        <div className="hero__subtitle">
            <span></span>
            <p>Premium Barber Shop</p>
        </div>

        <h1 className="hero__title">
            Royal <span>Fade</span>
        </h1>

        <p className="hero__description">
            Tworzymy fryzury, które podkreślają charakter.
            Klasyczne cięcia, nowoczesne fade'y i pielęgnacja brody
            na najwyższym poziomie.
        </p>

        <div className="hero__buttons">
        <Button
            onClick={() =>
            document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
            }>
            Umów wizytę
        </Button>

        <Button 
            variant="secondary"
            onClick={() =>
            document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
            }
            >
            Nasze usługi
        </Button>
        </div>

        </div>

        <div className="hero__image">
            <img src={barberImage} alt="Barber" />
        </div>

      </div>
    </section>
  );
}

export default Hero;