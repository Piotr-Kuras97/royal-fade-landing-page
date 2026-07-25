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
        price: "60 zł",
      },
      {
        name: "Long Hair Cut",
        price: "100 zł",
      },
      {
        name: "Hair Styling",
        price: "40 zł",
      },
    ],
  },
  {
    title: "Broda",
    services: [
      {
        name: "Beard Trim",
        price: "50 zł",
      },
      {
        name: "Beard Shaping",
        price: "60 zł",
      },
      {
        name: "Hot Towel Shave",
        price: "70 zł",
      },
    ],
  },
  {
    title: "Pakiety",
    services: [
      {
        name: "Haircut + Beard",
        price: "120 zł",
      },
      {
        name: "Skin Fade + Beard",
        price: "140 zł",
      },
      {
        name: "Premium Grooming",
        price: "170 zł",
      },
    ],
  },
  {
    title: "Pielęgnacja",
    services: [
      {
        name: "Hair Wash",
        price: "20 zł",
      },
      {
        name: "Hair Care Treatment",
        price: "40 zł",
      },
      {
        name: "Scalp Massage",
        price: "35 zł",
      },
    ],
  },
  {
    title: "Koloryzacja",
    services: [
      {
        name: "Grey Blending",
        price: "90 zł",
      },
      {
        name: "Hair Coloring",
        price: "120 zł",
      },
      {
        name: "Beard Coloring",
        price: "60 zł",
      },
    ],
  },
  {
    title: "Dla najmłodszych",
    services: [
      {
        name: "Kids Haircut (do 12 lat)",
        price: "60 zł",
      },
      {
        name: "Teen Haircut",
        price: "70 zł",
      },
    ],
  },
];