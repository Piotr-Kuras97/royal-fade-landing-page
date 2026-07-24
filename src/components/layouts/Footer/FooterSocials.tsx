import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { footerSocials } from "./footer.data";

const FooterSocials = (): React.JSX.Element => {

    return (

        <div className="footer-socials">

            <h3 className="footer-socials__title">
                Social Media
            </h3>

            <div className="footer-socials__list">

                {footerSocials.map((social) => (

                    <a
                        key={social.id}
                        href={social.href}
                        className="footer-socials__link"
                        aria-label={social.ariaLabel}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={social.icon} />
                    </a>

                ))}

            </div>

        </div>

    );

};

export default FooterSocials;