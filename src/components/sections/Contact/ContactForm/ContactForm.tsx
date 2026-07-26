import "./ContactForm.scss";

import { useState } from "react";

import { initialFormData, SUCCESS_MESSAGE_DURATION } from "./contact-form.constants";
import {
    validateField,
    validateForm
} from "./contact-form.validation";

import type {
    ContactFormData,
    ContactFormErrors
} from "./contact-form.types";

import { sendContactForm } from "../../../../email/sendEmail";

import Button from "../../../ui/Button/Button";

const ContactForm = () => {

    const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

    const [errors, setErrors] =
    useState<ContactFormErrors>({});

    const [isSubmitted, setIsSubmitted] =
    useState(false);

    const [isSubmitting, setIsSubmitting] =
    useState(false);

    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (isSubmitted) {

            setErrors((prev) => ({
                ...prev,
                [name]: validateField(
                    name as keyof ContactFormData,
                    value
                )
            }));

        }

    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {

        event.preventDefault();

        setIsSubmitted(true);

        const validationErrors = validateForm(formData);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {

            setIsSubmitting(true);
            setSubmitError("");

            await sendContactForm(formData);

            setFormData(initialFormData);
            setErrors({});
            setIsSubmitted(false);

            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
            }, SUCCESS_MESSAGE_DURATION);


        } catch (error) {
            setSubmitError(
                "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę."
            );

        } finally {
            setIsSubmitting(false);
        }

    };

    return (
        <div className="contact-form">

            <h3 className="contact-form__title">
                Napisz do nas
            </h3>

            {submitError && (
                <div 
                    className="contact-form__submit-error"
                    role="alert"
                >
                    {submitError}
                </div>
            )}
                        

            <form className="contact-form__form" onSubmit={handleSubmit} noValidate>

                <div className="contact-form__group">

                    <label htmlFor="name">
                        Imię i nazwisko
                    </label>

                    <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="→ Wpisz swoje imię i nazwisko"
                        aria-invalid={!!errors.name}
                        aria-describedby="name-error"
                    />

                    {errors.name && (
                    <span className="contact-form__error">
                        {errors.name}
                    </span>
                    )}

                </div>

                <div className="contact-form__group">

                    <label htmlFor="email">
                        Adres e-mail
                    </label>

                    <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="→ Wpisz swój adres e-mail"
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                    />

                    {errors.email && (
                    <span className="contact-form__error" id="email-error">
                        {errors.email}
                    </span>
                    )}

                </div>

                <div className="contact-form__group">

                    <label htmlFor="phone">
                        Numer telefonu
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="→ Wpisz numer telefonu"
                        aria-invalid={!!errors.phone}
                        aria-describedby="phone-error"
                    />

                    {errors.phone && (
                        <span className="contact-form__error">
                            {errors.phone}
                        </span>
                    )}

                </div>

                <div className="contact-form__group">

                    <label htmlFor="message">
                        Wiadomość
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        autoComplete="off"
                        placeholder="→ Opisz, w czym możemy Ci pomóc"
                        maxLength={500}
                        aria-invalid={!!errors.message}
                        aria-describedby="message-error"
                    />

                    {errors.message && (
                        <span className="contact-form__error">
                            {errors.message}
                        </span>
                    )}

                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Wysyłanie..."
                        : "Skontaktuj się z nami"}
                </Button>

            </form>

            {isSuccess && (
                <div 
                    className="contact-form__success"
                    role="status"
                    aria-live="polite"
                >
                    Dziękujemy! Twoja wiadomość została pomyślnie wysłana.
                </div>
            )}

        </div>
    );
};

export default ContactForm;