import "./Footer.scss";

import Logo from "../../ui/Logo/Logo";

import FooterNavigation from "./FooterNavigation";
import FooterSocials from "./FooterSocials";

const Footer = (): React.JSX.Element => {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer__content">

                    <div className="footer__brand">

                        <Logo />

                        <p className="footer__description">
                            Premium Barber Shop w Krakowie.
                            Styl, precyzja i najwyższa jakość usług.
                        </p>

                    </div>

                    <FooterNavigation />

                    <div className="footer__contact">

                        <h3 className="footer__title">
                            Kontakt
                        </h3>

                        <a
                            href="tel:+48123456789"
                            className="footer__link"
                        >
                            +48 123 456 789
                        </a>

                        <a
                            href="mailto:kontakt@royalfade.pl"
                            className="footer__link"
                        >
                            kontakt@royalfade.pl
                        </a>

                    </div>

                    <FooterSocials />

                </div>

                <div className="footer__bottom">

                    <p>
                        © 2026 Royal Fade. Wszelkie prawa zastrzeżone.
                    </p>

                    <p>
                        Designed & Developed by Piotr Kuraś
                    </p>

                </div>

            </div>

        </footer>

    );

};

export default Footer;