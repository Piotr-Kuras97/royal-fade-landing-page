import "./ContactInfo.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contactInfo } from "../contact.data";
import { socialLinks } from "../contact-social.data";

const ContactInfo = () => {

    return (
        <div className="contact-info">

            <h3 className="contact-info__title">
                Dane kontaktowe
            </h3>

            <div className="contact-info__list">
                    {contactInfo.map((item) => {

                    const content = (
                        <>
                            <div className="contact-info__icon">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>

                            <div className="contact-info__content">

                                <span className="contact-info__label">
                                    {item.title}
                                </span>

                                <p className="contact-info__value">
                                    {item.value}
                                </p>

                            </div>
                        </>
                    );

                    return item.href ? (
                        <a
                            key={item.id}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="contact-info__item contact-info__item--link"
                        >
                            {content}
                        </a>
                    ) : (
                        <div
                            key={item.id}
                            className="contact-info__item"
                        >
                            {content}
                        </div>
                    );

                })}

            </div>
                <div className="contact-info__social">

                    <h4 className="contact-info__social-title">
                        Obserwuj nas
                    </h4>

                    <div className="contact-info__social-links">

                        {socialLinks.map((social) => (

                            <a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="contact-info__social-link"
                            >

                                <FontAwesomeIcon icon={social.icon} />

                            </a>

                        ))}

                    </div>

            </div>
            

        </div>
    );
};

export default ContactInfo;