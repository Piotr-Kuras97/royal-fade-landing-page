import "./Contact.scss";
import ContactForm from "./ContactForm/ContactForm";

import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = () => {

    return (
        <section className="contact" id="contact">

            <div className="container contact__container">

                <span className="contact__subtitle">
                    Kontakt
                </span>

                <h2 className="contact__title">
                    Umów swoją wizytę
                </h2>

                <p className="contact__description">
                    Masz pytania lub chcesz zarezerwować termin? Skontaktuj się z nami telefonicznie, mailowo lub skorzystaj z formularza kontaktowego.
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