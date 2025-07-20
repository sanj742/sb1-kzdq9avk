export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'farmer' | 'consumer';
  avatar?: string;
  location: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  quantity: number;
  description: string;
  images: string[];
  farmerId: string;
  farmerName: string;
  location: string;
  harvestDate: string;
  isOrganic: boolean;
  rating: number;
  reviews: number;
}

export interface Order {
  id: string;
  products: {
    product: Product;
    quantity: number;
    totalPrice: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipping' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
  buyerId: string;
  sellerId: string;
  shippingAddress: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface WeatherData {
  location: string;
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    rainfall: number;
    windSpeed: number;
  };
  forecast: {
    date: string;
    high: number;
    low: number;
    condition: string;
    precipitation: number;
  }[];
  alerts: {
    type: 'weather' | 'crop';
    message: string;
    severity: 'low' | 'medium' | 'high';
  }[];
}

export interface Scheme {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  documents: string[];
  deadline: string;
  applicationLink: string;
  category: string;
}

export interface LoanProduct {
  id: string;
  bankName: string;
  productName: string;
  interestRate: number;
  minAmount: number;
  maxAmount: number;
  tenure: string;
  features: string[];
  eligibility: string[];
}