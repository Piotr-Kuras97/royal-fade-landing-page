import "./Navbar.scss";
import Button from "../ui/Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut, faGripLines, faXmark} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
  
function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <header className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          <span>Royal</span>

              <div className="navbar__logo-divider">
                <span></span>

                <FontAwesomeIcon
                icon={faCut}
                className="navbar__logo-icon"
                />

                <span></span>
            </div>

          <span>Fade</span>
        </a>

        <nav
        className={`navbar__navigation ${
            isMenuOpen ? "navbar__navigation--active" : ""
        }`}
        >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
            O nas
            </a>

            <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Usługi
            </a>

            <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
            Galeria
            </a>

            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Kontakt
            </a>

            
            <Button
                className="navbar__menu-button"
                onClick={() => setIsMenuOpen(false)}
                >
                Umów wizytę
            </Button>
        </nav>

        <button
            className="navbar__hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Otwórz menu"
            >
            <FontAwesomeIcon
                icon={isMenuOpen ? faXmark : faGripLines}
            />
        </button>
      </div>
    </header>

    {isMenuOpen && (
    <div
      className="navbar__overlay"
      onClick={() => setIsMenuOpen(false)}
    />
  )}

  </>
  );
}

export default Navbar;