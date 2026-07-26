import "./Contact.scss";
import ContactForm from "./ContactForm/ContactForm";

import ContactInfo from "./ContactInfo/ContactInfo";

import clsx from "clsx";

import useReveal from "../../../hooks/useReveal";

const Contact = () => {

    const { ref, isVisible } = useReveal();

    return (
        <section
            id="contact"
            className="contact"
            aria-labelledby="contact-title"
        >

            <div
                ref={ref}
                className={clsx("contact__container", "reveal", {
                    "reveal--visible": isVisible,
                })}
            >

                    <span className="contact__subtitle">
                        Kontakt
                    </span>

                    <h2 className="contact__title" id="contact-title">
                        Skontaktuj się z nami
                    </h2>

                    <p className="contact__description">
                        Chętnie odpowiemy na Twoje pytania. Skontaktuj się z nami telefonicznie, mailowo lub za pomocą formularza kontaktowego.
                    </p>

                    <div className="contact__divider">

                        <span className="contact__divider-line" />

                        <span className="contact__divider-icon" />

                        <span className="contact__divider-line" />

                    </div>

                    <div className="contact__content">

                        <ContactForm />

                        <ContactInfo />

                    </div>

                </div>

        </section>
    );
};

export default Contact;