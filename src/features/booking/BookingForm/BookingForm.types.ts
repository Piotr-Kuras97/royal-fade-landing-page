export interface BookingFormData {
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message: string;
}

export interface BookingFormErrors {
    name?: string;
    phone?: string;
    service?: string;
    date?: string;
    time?: string;
    message?: string;
}

