import {
    createContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import type { BookingContextValue } from "./BookingContext.types";

export const BookingContext = createContext<BookingContextValue | null>(null);

interface BookingProviderProps {
    children: ReactNode;
}

export function BookingProvider({
    children,
}: BookingProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openBooking = () => {
        setIsOpen(true);
    };

    const closeBooking = () => {
        setIsOpen(false);
    };

    const value = useMemo(
        () => ({
            isOpen,
            openBooking,
            closeBooking,
        }),
        [isOpen]
    );

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
}