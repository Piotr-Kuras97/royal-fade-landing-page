import type { ContactFormData } from "./contact-form.types";

export const initialFormData: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    message: ""
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PHONE_REGEX = /^[+]?[0-9\s-]{9,15}$/;  