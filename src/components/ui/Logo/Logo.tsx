import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

import { NavLink, useLocation  } from "react-router";

import "./Logo.scss";

const Logo = (): React.JSX.Element => {

    const location = useLocation();

    const scrollToTopIfHome  = () => {
        if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (

        <NavLink
            to="/"
            onClick={scrollToTopIfHome}
            className="logo"
            aria-label="Przejdź do strony głównej"
        >

            <span>Royal</span>

            <div className="logo__divider">

                <span></span>

                <FontAwesomeIcon
                    icon={faCut}
                    className="logo__icon"
                    aria-hidden="true"
                />

                <span></span>

            </div>

            <span>Fade</span>

        </NavLink>

    );

};

export default Logo;