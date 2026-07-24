import { footerNavigation } from "./footer.data";

const FooterNavigation = (): React.JSX.Element => {

    return (

        <nav className="footer-navigation">

            <h3 className="footer-navigation__title">
                Nawigacja
            </h3>

            <ul className="footer-navigation__list">

                {footerNavigation.map((item) => (

                    <li
                        key={item.id}
                        className="footer-navigation__item"
                    >

                        <a
                            href={item.href}
                            className="footer-navigation__link"
                        >
                            {item.label}
                        </a>

                    </li>

                ))}

            </ul>

        </nav>

    );

};

export default FooterNavigation;