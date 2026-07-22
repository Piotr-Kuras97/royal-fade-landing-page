import "./GalleryItem.scss";
import clsx from "clsx";

import type { GalleryItemProps } from "./gallery-item.types";

const GalleryItem = ({ image }: GalleryItemProps) => {
    return (
        <article
            className={clsx(
                "gallery-item",
                `gallery-item--${image.layout}`
            )}
        >
            <img
                className="gallery-item__image"
                src={image.image}
                alt={image.title}
            />

            <div className="gallery-item__overlay">
                <span className="gallery-item__category">
                    {image.category}
                </span>

                <h3 className="gallery-item__title">
                    {image.title}
                </h3>
            </div>
        </article>
    );
};

export default GalleryItem;