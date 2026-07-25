import "./Gallery.scss";

import GalleryItem from "./GalleryItem/GalleryItem";

import { galleryImages } from "./gallery.data";

import clsx from "clsx";

import useReveal from "../../../hooks/useReveal";

const Gallery = () => {
    const { ref, isVisible } = useReveal();

    return (
        <section
            id="gallery"
            className="gallery"
        >

            <div
                ref={ref}
                className={clsx("container", "reveal", {
                    "reveal--visible": isVisible,
                })}
            >

                <div className="gallery__container container">

                    <div className="gallery__header">

                        <div className="gallery__subtitle">
                            <span></span>
                            Nasze realizacje
                        </div>

                        <h2 className="gallery__title">
                            Efekty, które mówią same za siebie
                        </h2>

                        <p className="gallery__description">
                            Każde strzyżenie to połączenie precyzji,
                            doświadczenia i dbałości o najmniejszy detal.
                            Zobacz wybrane realizacje oraz wnętrze naszego salonu.
                        </p>

                        <div className="gallery__accent">
                            <span></span>
                            <div></div>
                            <span></span>
                        </div>

                    </div>

                    <div className="gallery__grid">

                        {galleryImages.map((image) => (
                            <GalleryItem
                                key={image.id}
                                image={image}
                            />
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Gallery;