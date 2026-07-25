import type { PricingService } from "../../../data/pricing";

export interface PriceCategoryProps {
  title: string;
  services: PricingService[];
}