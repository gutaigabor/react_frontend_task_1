export interface Trip {
  _id?: string;
  name: string;
  countryCount: number;
  days: number;
  emissionOffset: number;
  rating: number;
  bgImage?: string;
}