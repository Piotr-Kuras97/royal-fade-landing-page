import emailjs from "@emailjs/browser";

import type { ContactFormData } from "./contact-form.types";

const {
    VITE_EMAILJS_PUBLIC_KEY,
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID
} = import.meta.env;

export const sendContactForm = async (
    formData: ContactFormData
): Promise<void> => {

    await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        },
        {
            publicKey: VITE_EMAILJS_PUBLIC_KEY
        }
    );

};