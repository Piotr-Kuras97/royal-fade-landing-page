import emailjs from "@emailjs/browser";

import type { ContactFormData } from "../components/sections/Contact/ContactForm/contact-form.types";
import type { BookingFormData } from "../features/booking/BookingForm/BookingForm.types";

const {
    VITE_EMAILJS_PUBLIC_KEY,
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATECONTACT_ID,
    VITE_EMAILJS_TEMPLATEBOOKING_ID,
} = import.meta.env;

export const sendContactForm = async (
    formData: ContactFormData
): Promise<void> => {

    await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATECONTACT_ID,
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

export const sendBookingEmail = async (data: BookingFormData) => {
    return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATEBOOKING_ID,
        {
            name: data.name,
            phone: data.phone,
            service: data.service,
            date: data.date,
            time: data.time,
            message: data.message || "Brak dodatkowych informacji",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
};