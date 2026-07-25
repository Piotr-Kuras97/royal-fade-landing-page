import "./Navbar.scss";
import Button from "../../ui/Button/Button";
import { navigationItems } from "./navigation.data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faXmark} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../ui/Logo/Logo";

import { useState } from "react";
import useActiveSection from "../../../hooks/useActiveSection";
import clsx from "clsx";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

  
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = useActiveSection();

  const handleAppointmentClick = () => {
    setIsMenuOpen(false);

    document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
  };

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isPricingPage = location.pathname === "/pricing";

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
    ) => {
        setIsMenuOpen(false);

        if (location.pathname !== "/") {
        event.preventDefault();
        navigate("/", {
            state: {
                targetSection: href,
            },
        });
        }
    };
  return (
    <>
    <header className="navbar">
      <div className="navbar__container">

        <Logo />

        <nav
            id="navbar-navigation"
            className={clsx("navbar__navigation", {
                "navbar__navigation--active": isMenuOpen,
            })}
        >
            {navigationItems.slice(0, 2).map((item)  => (
                <a
                    key={item.href}
                    href={item.href}
                    className={clsx("navbar__link", {
                        "navbar__link--active":
                            isHomePage &&
                            activeSection === item.href.substring(1),
                    })}
                    onClick={(event) => handleNavigation(event, item.href)}
                >
                    {item.label}
                </a>
            ))}

            <NavLink 
            to="/pricing" 
            className={clsx(
                "navbar__link",
                "navbar__pricing",
                {
                    "navbar__pricing--active": isPricingPage,
                }
            )}
>
                Cennik
            </NavLink>

            {navigationItems.slice(2).map((item)  => (
                <a
                    key={item.href}
                    href={item.href}
                    className={clsx("navbar__link", {
                        "navbar__link--active":
                            isHomePage &&
                            activeSection === item.href.substring(1),
                    })}
                    onClick={(event) => handleNavigation(event, item.href)}
                >
                    {item.label}
                </a>
            ))}

            <Button
                className="navbar__menu-button"
                onClick={handleAppointmentClick}
                >
                Umów wizytę
            </Button>
        </nav>

      <button
          type="button"
          className="navbar__hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
              isMenuOpen
                  ? "Zamknij menu"
                  : "Otwórz menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="navbar-navigation"
      >
          <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faGripLines}
              aria-hidden="true"
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