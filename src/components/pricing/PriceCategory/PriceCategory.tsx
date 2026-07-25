import "./PriceCategory.scss";

import PriceItem from "../PriceItem";

import type { PriceCategoryProps } from "./PriceCategory.types";

function PriceCategory({ title, services }: PriceCategoryProps) {
  return (
    <section className="price-category">
        <div className="price-category__heading">
            <span className="price-category__accent" />

            <h2 className="price-category__title">
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