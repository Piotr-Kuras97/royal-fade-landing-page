import "./About.scss";
import insideImage from "../../assets/images/inside.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faAward,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__content">

          <div className="about__subtitle">
            <span></span>
            <p>O nas</p>
          </div>

          <h2 className="about__title">
            Tworzymy miejsce,
            do którego chce się wracać.
          </h2>

          <p className="about__description">
            Royal Fade to barber shop stworzony z myślą
            o mężczyznach, którzy cenią najwyższą jakość,
            profesjonalizm oraz wyjątkową atmosferę.
          </p>

            <ul className="about__list">

                <li>
                    <FontAwesomeIcon icon={faUserTie} />
                    <span>Doświadczeni barberzy</span>
                </li>

                <li>
                    <FontAwesomeIcon icon={faAward} />
                    <span>Najwyższej jakości kosmetyki</span>
                </li>

                <li>
                    <FontAwesomeIcon icon={faHandshake} />
                    <span>Indywidualne podejście</span>
                </li>

            </ul>

        </div>

        <div className="about__image">
            <img src={insideImage} alt="Inside" />
        </div>

      </div>

      <div className="about__stats">

        <div className="about__stat">
          <h3>10+</h3>
          <p>Lat doświadczenia</p>
        </div>

        <div className="about__stat">
          <h3>3000+</h3>
          <p>Zadowolonych klientów</p>
        </div>

        <div className="about__stat">
          <h3>4.9★</h3>
          <p>Średnia ocen</p>
        </div>

      </div>

    </section>
  );
}

export default About;