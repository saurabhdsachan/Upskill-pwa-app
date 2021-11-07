export interface Feature {
  _id: string;
  label: string;
}
export interface Price {
  value: number;
  label: string;
}
export interface PricingData {
  features: Array<Feature>;
  price: Price;
  name: string;
  description: string;
}
