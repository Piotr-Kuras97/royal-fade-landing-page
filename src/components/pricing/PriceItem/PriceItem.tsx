import "./PriceItem.scss";

import type { PriceItemProps } from "./PriceItem.types";

function PriceItem({ name, price }: PriceItemProps) {
  return (
    <div className="price-item">
      <span className="price-item__name">{name}</span>

      <span className="price-item__divider" />

      <span className="price-item__price">{price}</span>
    </div>
  );
}

export default PriceItem;