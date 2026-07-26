import { useState } from "react";
import Button from "../../../components/ui/Button/Button";
import "./BookingForm.scss";
import { AVAILABLE_TIMES, INITIAL_BOOKING_FORM_DATA, SUCCESS_MESSAGE_DURATION, NAME_REGEX } from "./booking.data";
import type { BookingFormErrors } from "./BookingForm.types";
import { sendBookingEmail } from "../../../email/sendEmail";
import { useBooking } from "../../../context/BookingContext";

import clsx from "clsx";


const BookingForm = () => {

    const {
        closeBooking,
    } = useBooking();
    type SubmitStatus = "idle" | "success" | "error";
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<BookingFormErrors>({});
    const [formData, setFormData] = useState(INITIAL_BOOKING_FORM_DATA);

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    };

    const validateForm = (): BookingFormErrors => {
        const newErrors: BookingFormErrors = {};
        const phone = formData.phone.replace(/\D/g, "");
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        maxDate.setHours(23, 59, 59, 999);

        if (!formData.name.trim()) {
            newErrors.name = "Podaj imię i nazwisko.";
        } else if (formData.name.trim().length < 3) {
            newErrors.name = "Imię i nazwisko jest za krótkie.";
        } else if (!NAME_REGEX.test(formData.name.trim())) {
            newErrors.name = "Imię i nazwisko zawiera niedozwolone znaki.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Podaj numer telefonu.";
        } else if (phone.length !== 9 && phone.length !== 11) {
            newErrors.phone = "Podaj poprawny numer telefonu.";
        }

        if (!formData.service) {
            newErrors.service = "Wybierz usługę.";
        }

        if (!formData.date) {
            newErrors.date = "Wybierz datę.";
        }
        if (selectedDate.getDay() === 0) {
            newErrors.date = "Salon jest zamknięty w niedziele.";
        }
        if (selectedDate < today) {
            newErrors.date = "Nie można wybrać wcześniejszej daty.";
        }
        if (selectedDate > maxDate) {
            newErrors.date = "Można umówić wizytę maksymalnie 3 miesiące wcześniej.";
        }

        if (!formData.time) {
            newErrors.time = "Wybierz godzinę.";
        }

        return newErrors;
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setSubmitStatus("idle");

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            setIsSubmitting(true);

            await sendBookingEmail(formData);

            setSubmitStatus("success");
            setFormData(INITIAL_BOOKING_FORM_DATA);
            setErrors({});

            setTimeout(() => {
                closeBooking();
            }, SUCCESS_MESSAGE_DURATION);
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="booking-form">

            <h2 className="booking-form__title">
                Umów wizytę
            </h2>

            <p className="booking-form__description">
                Wypełnij formularz, a skontaktujemy się z Tobą,
                aby potwierdzić dogodny termin wizyty.
            </p>

            <form 
                className="booking-form__form"
                onSubmit={handleSubmit}
            >

                <div className="booking-form__field">
                    <label 
                        htmlFor="name"
                        className="booking-form__label"
                    >
                        Imię i nazwisko
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jan Kowalski"
                        className={clsx("booking-form__input", {
                            "booking-form__input--error": errors.name,
                        })}
                        value={formData.name}
                        onChange={handleChange}
                    />

                    {errors.name && (
                        <span className="booking-form__error">
                            {errors.name}
                        </span>
                    )}
                </div>

                <div className="booking-form__field">
                    <label 
                        htmlFor="phone"
                        className="booking-form__label"
                    >
                        Telefon
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+48 123 456 789"
                        className={clsx("booking-form__input", {
                            "booking-form__input--error": errors.phone,
                        })}
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    {errors.phone && (
                        <span className="booking-form__error">
                            {errors.phone}
                        </span>
                    )}
                </div>

                <div className="booking-form__field">
                    <label 
                        htmlFor="service"
                        className="booking-form__label"
                    >
                        Usługa
                    </label>

                    <select 
                        id="service"
                        name="service"
                        className={clsx("booking-form__select", {
                            "booking-form__select--error": errors.service,
                        })}
                        value={formData.service}
                        onChange={handleChange}
                        
                    >
                        <option value=""> 
                        Wybierz usługę
                        </option>
                        <option>Strzyżenie</option>
                        <option>Strzyżenie + broda</option>
                        <option>Modelowanie brody</option>
                        <option>Golenie brzytwą</option>
                    </select>

                    {errors.service && (
                        <span className="booking-form__error">
                            {errors.service}
                        </span>
                    )}
                </div>

                <div className="booking-form__row">

                    <div className="booking-form__field">
                        <label 
                            htmlFor="date"
                            className="booking-form__label"
                        >
                            Preferowana data
                        </label>

                        <input
                            id="date"
                            name="date"
                            type="date"
                            className={clsx("booking-form__input", {
                                "booking-form__input--error": errors.date,
                            })}
                            value={formData.date}
                            onChange={handleChange}
                        />

                        {errors.date && (
                            <span className="booking-form__error">
                                {errors.date}
                            </span>
                        )}
                    </div>

                    <div className="booking-form__field">
                        <label 
                            htmlFor="time"
                            className="booking-form__label"
                        >
                            Preferowana godzina
                        </label>

                        <select
                            id="time"
                            name="time"
                            className={clsx("booking-form__select", {
                                "booking-form__select--error": errors.time,
                            })}
                            value={formData.time}
                            onChange={handleChange}
                        >
                            <option value="">
                                Wybierz godzinę
                            </option>

                            {AVAILABLE_TIMES.map((time) => (
                                <option
                                    key={time}
                                    value={time}
                                >
                                    {time}
                                </option>
                            ))}
                        </select>

                        {errors.time && (
                            <span className="booking-form__error">
                                {errors.time}
                            </span>
                        )}
                    </div>

                </div>

                <div className="booking-form__field">
                    <label 
                        htmlFor="message"
                        className="booking-form__label"
                    >
                        Dodatkowe informacje
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Np. chciałbym umówić się po godzinie 17:00..."
                        className="booking-form__textarea"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <Button 
                    type="submit"
                    className="booking-form__submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Wysyłanie..." : "Umów wizytę"}
                </Button>

            </form>

            {submitStatus === "success" && (
                <p 
                className="booking-form__success" 
                role="status"
                aria-live="polite">
                    Rezerwacja została wysłana. Skontaktujemy się z Tobą w celu potwierdzenia terminu.
                </p>
            )}

            {submitStatus === "error" && (
                <p className="booking-form__error-message" role="alert">
                    Nie udało się wysłać formularza. Spróbuj ponownie za chwilę.
                </p>
            )}

        </div>
    );
}

export default BookingForm