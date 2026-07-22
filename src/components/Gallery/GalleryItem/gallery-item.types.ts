export interface GalleryImage {
    id: number;
    image: string;
    title: string;
    category: string;
    layout: "large" | "wide" | "normal";
}

export interface GalleryItemProps {
    image: GalleryImage;
}