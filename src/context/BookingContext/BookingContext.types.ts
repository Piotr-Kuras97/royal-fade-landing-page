export interface BookingContextValue {
    isOpen: boolean;

    openBooking: () => void;

    closeBooking: () => void;
}