import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

import "./Logo.scss";

const Logo = (): React.JSX.Element => {

    return (

        <a href="#hero" className="logo">

            <span>Royal</span>

            <div className="logo__divider">

                <span></span>

                <FontAwesomeIcon
                    icon={faCut}
                    className="logo__icon"
                />

                <span></span>

            </div>

            <span>Fade</span>

        </a>

    );

};

export default Logo;