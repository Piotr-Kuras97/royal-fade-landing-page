import type { BookingFormData } from "./BookingForm.types";

export const AVAILABLE_TIMES = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
];

export const INITIAL_BOOKING_FORM_DATA: BookingFormData = {
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
};

export const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż\s-]+$/;

export const SUCCESS_MESSAGE_DURATION = 2000;
