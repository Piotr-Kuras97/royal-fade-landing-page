import type {
    ContactFormData,
    ContactFormErrors
} from "./contact-form.types";

import {
    EMAIL_REGEX,
    PHONE_REGEX
    } from "./contact-form.constants";

export const validateForm = (
    formData: ContactFormData
): ContactFormErrors => {

    const errors: ContactFormErrors = {};

    if (!formData.name.trim()) {
        errors.name = "Podaj swoje imię i nazwisko.";
    } else if (formData.name.trim().length < 3) {
        errors.name = "Imię i nazwisko powinno zawierać co najmniej 3 znaki.";
    }

    if (!formData.email.trim()) {

        errors.email = "Podaj adres e-mail.";

    } else if (!EMAIL_REGEX.test(formData.email)) {

        errors.email = "Podaj poprawny adres e-mail.";

    }

    if (!formData.phone.trim()) {

        errors.phone = "Podaj numer telefonu.";

    } else if (!PHONE_REGEX.test(formData.phone)) {

        errors.phone = "Podaj poprawny numer telefonu.";

    }
    if (!formData.message.trim()) {

        errors.message = "Wpisz wiadomość.";

    } else if (formData.message.trim().length < 20) {

        errors.message =
            "Wiadomość powinna zawierać co najmniej 20 znaków.";

    }
    return errors;

};

export const validateField = (
    name: keyof ContactFormData,
    value: string
): string | undefined => {

    switch (name) {

        case "name":

            if (!value.trim()) {
                return "Podaj swoje imię i nazwisko.";
            }

            if (value.trim().length < 3) {
                return "Imię i nazwisko powinno zawierać co najmniej 3 znaki.";
            }

            break;

        case "email":

            if (!value.trim()) {
                return "Podaj adres e-mail.";
            }

            if (!EMAIL_REGEX.test(value)) {
                return "Podaj poprawny adres e-mail.";
            }

            break;

        case "phone":

            if (!value.trim()) {
                return "Podaj numer telefonu.";
            }

            if (!PHONE_REGEX.test(value)) {
                return "Podaj poprawny numer telefonu.";
            }

            break;

        case "message":

            if (!value.trim()) {
                return "Wpisz wiadomość.";
            }

            if (value.trim().length < 20) {
                return "Wiadomość powinna zawierać co najmniej 20 znaków.";
            }

            break;

    }

    return undefined;

};