export type Language = "uz" | "ru" | "en";

export interface Stadium {
  id: string;
  name: string;
  location: string;
  district: string;
  price: number;
  rating: number;
  reviews: number;
  size: string;
  surface: string;
  available: boolean;
  photo: string;
  badge?: "top" | "free_today" | null;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  stadiumName: string;
  location: string;
  message: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
