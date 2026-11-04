import type { Amenity, District, PitchSize, PitchType } from "./data";

export interface Filters {
  districts: District[];
  date: string;
  time: string;
  maxPrice: number;
  types: PitchType[];
  sizes: PitchSize[];
  amenities: Amenity[];
}

export const PRICE_MIN = 150000;
export const PRICE_MAX = 350000;

export const EMPTY_FILTERS: Filters = {
  districts: [],
  date: "",
  time: "",
  maxPrice: PRICE_MAX,
  types: [],
  sizes: [],
  amenities: [],
};
