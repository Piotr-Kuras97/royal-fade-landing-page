import "./PriceCategory.scss";

import PriceItem from "../PriceItem";

import type { PriceCategoryProps } from "./PriceCategory.types";

const PriceCategory = ({ title, services }: PriceCategoryProps) => {
  return (
    <section className="price-category" aria-labelledby={`category-${title}`}>
        <div className="price-category__heading">
            <span className="price-category__accent" />

            <h2 className="price-category__title" id={`category-${title}`}>
                {title}
            </h2>
        </div>

      <div className="price-category__items">
        {services.map((service) => (
          <PriceItem
            key={service.name}
            name={service.name}
            price={service.price}
          />
        ))}
      </div>
    </section>
  );
}

export default PriceCategory;