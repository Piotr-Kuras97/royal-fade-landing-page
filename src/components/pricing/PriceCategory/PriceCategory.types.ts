import type { PricingService } from "../../../pages/Pricing/pricing";

export interface PriceCategoryProps {
  title: string;
  services: PricingService[];
}