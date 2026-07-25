export interface PricingService {
  name: string;
  price: string;
}

export interface PricingCategory {
  title: string;
  services: PricingService[];
}

export const pricing: PricingCategory[] = [
  {
    title: "Strzyżenie",
    services: [
      {
        name: "Classic Cut",
        price: "80 zł",
      },
      {
        name: "Skin Fade",
        price: "90 zł",
      },
      {
        name: "Buzz Cut",
        price: "70 zł",
      },
    ],
  },
  {
    title: "Broda",
    services: [
      {
        name: "Modelowanie brody",
        price: "50 zł",
      },
      {
        name: "Strzyżenie + broda",
        price: "120 zł",
      },
    ],
  },
];