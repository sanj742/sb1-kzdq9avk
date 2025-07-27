import { Product, WeatherData, Scheme, LoanProduct } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Basmati Rice',
    category: 'Grains',
    price: 85,
    unit: 'kg',
    quantity: 500,
    description: 'Premium quality basmati rice, freshly harvested from organic farms in Punjab.',
    images: ['https://images.pexels.com/photos/1586943/pexels-photo-1586943.jpeg?auto=compress&cs=tinysrgb&w=800'],
    farmerId: 'farmer1',
    farmerName: 'Rajesh Kumar',
    location: 'Punjab, India',
    harvestDate: '2024-11-15',
    isOrganic: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: '2',
    name: 'Organic Tomatoes',
    category: 'Vegetables',
    price: 40,
    unit: 'kg',
    quantity: 200,
    description: 'Fresh, juicy tomatoes grown without pesticides. Perfect for cooking and salads.',
    images: ['https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800'],
    farmerId: 'farmer2',
    farmerName: 'Priya Sharma',
    location: 'Maharashtra, India',
    harvestDate: '2024-12-01',
    isOrganic: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Fresh Banana',
    category: 'Fruits',
    price: 80,
    unit: 'dozen',
    quantity: 100,
    description: 'Sweet and succulent Alphonso mangoes, the king of fruits from Maharashtra.',
    images: ['https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=800'],
    farmerId: 'farmer3',
    farmerName: 'Amit Patil',
    location: 'Maharashtra, India',
    harvestDate: '2024-11-28',
    isOrganic: false,
    rating: 4.9,
    reviews: 234
  },
  {
    id: '4',
    name: 'Organic Wheat',
    category: 'Grains',
    price: 45,
    unit: 'kg',
    quantity: 1000,
    description: 'High-quality organic wheat flour, stone-ground for maximum nutrition.',
    images: ['https://images.pexels.com/photos/459403/pexels-photo-459403.jpeg?auto=compress&cs=tinysrgb&w=800'],
    farmerId: 'farmer4',
    farmerName: 'Suresh Singh',
    location: 'Uttar Pradesh, India',
    harvestDate: '2024-11-20',
    isOrganic: true,
    rating: 4.7,
    reviews: 156
  }
];

export const mockWeatherData: WeatherData = {
  location: 'Delhi, India',
  current: {
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    rainfall: 0,
    windSpeed: 12
  },
  forecast: [
    { date: '2024-12-15', high: 30, low: 18, condition: 'Sunny', precipitation: 0 },
    { date: '2024-12-16', high: 28, low: 16, condition: 'Cloudy', precipitation: 10 },
    { date: '2024-12-17', high: 25, low: 14, condition: 'Light Rain', precipitation: 60 },
    { date: '2024-12-18', high: 27, low: 15, condition: 'Partly Cloudy', precipitation: 20 },
    { date: '2024-12-19', high: 29, low: 17, condition: 'Sunny', precipitation: 0 },
    { date: '2024-12-20', high: 31, low: 19, condition: 'Sunny', precipitation: 0 },
    { date: '2024-12-21', high: 26, low: 13, condition: 'Cloudy', precipitation: 30 }
  ],
  alerts: [
    {
      type: 'weather',
      message: 'Light rain expected on Dec 17. Protect harvested crops.',
      severity: 'medium'
    },
    {
      type: 'crop',
      message: 'Ideal conditions for wheat sowing in your region.',
      severity: 'low'
    }
  ]
};

export const mockSchemes: Scheme[] = [
  {
    id: '1',
    title: 'PM-KISAN Scheme',
    description: 'Direct income support to small and marginal farmers',
    eligibility: ['Small and marginal farmers', 'Land ownership documents required'],
    benefits: ['₹6,000 per year in 3 installments', 'Direct bank transfer'],
    documents: ['Aadhaar Card', 'Land Records', 'Bank Account Details'],
    deadline: '2024-12-31',
    applicationLink: 'https://pmkisan.gov.in',
    category: 'Financial Support'
  },
  {
    id: '2',
    title: 'Kisan Credit Card',
    description: 'Easy access to credit for agricultural needs',
    eligibility: ['All farmers including tenant farmers', 'Valid agricultural documents'],
    benefits: ['Low interest rates', 'No collateral for loans up to ₹1.6 lakh'],
    documents: ['Identity Proof', 'Address Proof', 'Land Records'],
    deadline: 'Ongoing',
    applicationLink: 'https://agricoop.gov.in',
    category: 'Credit Facility'
  }
];

export const mockLoanProducts: LoanProduct[] = [
  {
    id: '1',
    bankName: 'State Bank of India',
    productName: 'Kisan Credit Card',
    interestRate: 7.0,
    minAmount: 25000,
    maxAmount: 300000,
    tenure: '5 years',
    features: ['No processing fee', 'Flexible repayment', 'Insurance coverage'],
    eligibility: ['Valid land documents', 'Age 18-65 years', 'Good credit score']
  },
  {
    id: '2',
    bankName: 'HDFC Bank',
    productName: 'Agricultural Term Loan',
    interestRate: 8.5,
    minAmount: 50000,
    maxAmount: 2000000,
    tenure: '7 years',
    features: ['Quick processing', 'Collateral-free up to ₹10 lakh', 'Digital application'],
    eligibility: ['Farming experience of 2+ years', 'Valid KYC documents', 'Income proof']
  }
];
