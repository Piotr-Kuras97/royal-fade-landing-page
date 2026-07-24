import type { Testimonial } from "./TestimonialCard/testimonial-card.types";

import client1 from "../../../assets/images/client-1.jpg";
import client2 from "../../../assets/images/client-2.jpg";
import client3 from "../../../assets/images/client-3.jpg";

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Adam Nowak",
        role: "Klient od 2022 roku",
        rating: 5,
        image: client1,
        text: "Pełen profesjonalizm i świetna atmosfera. Fryzura zawsze wygląda dokładnie tak, jak oczekiwałem, a każda wizyta to czysta przyjemność.",
    },
    {
        id: 2,
        name: "Michał Wiśniewski",
        role: "Stały klient",
        rating: 5,
        image: client2,
        text: "Najlepszy barber, u jakiego byłem. Perfekcyjne strzyżenie, dbałość o każdy detal i bardzo miła obsługa. Zdecydowanie polecam!",
    },
    {
        id: 3,
        name: "Daniel Kowalczyk",
        role: "Klient od 2021 roku",
        rating: 5,
        image: client3,
        text: "Nowoczesny salon, świetni ludzie i usługi na najwyższym poziomie. Wychodzę stąd zadowolony po każdej wizycie.",
    }
];