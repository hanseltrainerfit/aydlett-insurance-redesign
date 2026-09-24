export type CoverageCategory = 'all' | 'personal' | 'coastal' | 'recreational' | 'commercial';

export interface InsuranceProduct {
  id: string;
  name: string;
  category: CoverageCategory;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  coastalConsiderations?: string;
  iconName: string;
  popular?: boolean;
}

export interface QuoteFormData {
  coverageType: string;
  specificInterests: string[];
  timeline: string;
  currentInsurance: string;
  fullName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'email';
  notes: string;
  addressOrZip?: string;
}

export interface OfficeHoursDay {
  day: string;
  hours: string;
  isOpenToday?: boolean;
}

export interface AgencyInfo {
  name: string;
  legalName: string;
  foundedYear: number;
  yearsInBusiness: string;
  phone: string;
  phoneRaw: string;
  fax: string;
  faxRaw: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  serviceAreas: string[];
  hours: OfficeHoursDay[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  policyType: string;
  quote: string;
  rating: number;
  badge?: string;
}
