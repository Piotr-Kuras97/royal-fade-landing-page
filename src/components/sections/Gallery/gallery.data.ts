import gallery1 from "../../../assets/images/gallery1.jpg"
import gallery2 from "../../../assets/images/gallery2.jpg"
import gallery3 from "../../../assets/images/gallery3.jpg"
import gallery4 from "../../../assets/images/gallery4.jpg"
import gallery5 from "../../../assets/images/gallery5.jpg"


import type{ GalleryImage } from "./GalleryItem/gallery-item.types";

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        image: gallery1,
        title: "Royal Fade",
        category: "Strzyżenie",
        layout: "large"
    },
    {
        id: 2,
        image: gallery2,
        title: "Fade",
        category: "Skin Fade Precision",
        layout: "normal"
    },
    {
        id: 3,
        image: gallery3,
        title: "Broda",
        category: "Beard Sculpting",
        layout: "normal",
    },
    {
        id: 4,
        image: gallery4,
        title: "Salon",
        category: "Premium Interior",
        layout: "normal"
    },
    {
        id: 5,
        image: gallery5,
        title: "Atmosfera",
        category: "Royal Experience",
        layout: "wide"
    },
]