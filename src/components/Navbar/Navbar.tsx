import "./Navbar.scss";
import Button from "../ui/Button/Button";
import { navigationItems } from "./navigation.data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faXmark} from "@fortawesome/free-solid-svg-icons";
import Logo from "../ui/Logo/Logo";

import { useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import clsx from "clsx";
  
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = useActiveSection();
  return (
    <>
    <header className="navbar">
      <div className="navbar__container">

        <Logo />

        <nav
        className={`navbar__navigation ${
            isMenuOpen ? "navbar__navigation--active" : ""
        }`}
        >
            {navigationItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className={clsx("navbar__link", {
                        "navbar__link--active":
                            activeSection === item.href.substring(1),
                    })}
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.label}
                </a>
            ))}

            <Button
                className="navbar__menu-button"
                onClick={() => 
                  setIsMenuOpen(false)
                }
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