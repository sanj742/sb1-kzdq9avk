import React, { useState } from 'react';
import { 
  Calculator, 
  CreditCard, 
  TrendingUp, 
  Building2, 
  Phone, 
  ExternalLink,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  IndianRupee,
  Clock
} from 'lucide-react';
import { mockLoanProducts } from '../data/mockData';

const Banking: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [tenure, setTenure] = useState(5);
  const [interestRate, setInterestRate] = useState(7.5);
  const [selectedTab, setSelectedTab] = useState('loans');

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const totalAmount = calculateEMI() * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const bankingServices = [
    {
      title: 'Kisan Credit Card',
      description: 'Easy access to credit for agricultural needs',
      features: ['Flexible repayment', 'Low interest rates', 'No collateral required'],
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: 'Crop Insurance',
      description: 'Protect your crops against natural calamities',
      features: ['Weather risk coverage', 'Quick claim settlement', 'Subsidized premiums'],
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: 'Digital Payments',
      description: 'Secure and convenient payment solutions',
      features: ['UPI integration', 'Mobile banking', 'Digital wallets'],
      icon: <Phone className="w-8 h-8" />
    },
    {
      title: 'Financial Advisory',
      description: 'Expert guidance for financial planning',
      features: ['Investment advice', 'Risk assessment', 'Portfolio management'],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const bankPartners = [
    { name: 'State Bank of India', products: 12, rating: 4.5 },
    { name: 'HDFC Bank', products: 8, rating: 4.3 },
    { name: 'ICICI Bank', products: 10, rating: 4.4 },
    { name: 'Punjab National Bank', products: 9, rating: 4.2 },
    { name: 'Bank of Baroda', products: 7, rating: 4.1 },
    { name: 'Canara Bank', products: 6, rating: 4.0 }
  ];

  const tabs = [
    { id: 'loans', label: 'Loan Products', icon: <IndianRupee className="w-4 h-4" /> },
    { id: 'calculator', label: 'EMI Calculator', icon: <Calculator className="w-4 h-4" /> },
    { id: 'services', label: 'Banking Services', icon: <Building2 className="w-4 h-4" /> },
    { id: 'partners', label: 'Bank Partners', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Banking Services</h1>
          <p className="text-gray-600">
            Access comprehensive banking solutions tailored for agricultural needs
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 flex items-center space-x-2 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Loan Products Tab */}
            {selectedTab === 'loans' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockLoanProducts.map((loan) => (
                    <div key={loan.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{loan.productName}</h3>
                          <p className="text-gray-600">{loan.bankName}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary-600">{loan.interestRate}%</p>
                          <p className="text-sm text-gray-500">Interest Rate</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Loan Amount</p>
                          <p className="font-medium">₹{loan.minAmount.toLocaleString()} - ₹{loan.maxAmount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Tenure</p>
                          <p className="font-medium">{loan.tenure}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {loan.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start space-x-1">
                              <CheckCircle className="w-3 h-3 text-success-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Eligibility</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {loan.eligibility.slice(0, 2).map((criterion, index) => (
                            <li key={index} className="flex items-start space-x-1">
                              <FileText className="w-3 h-3 text-primary-500 mt-0.5 flex-shrink-0" />
                              <span>{criterion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EMI Calculator Tab */}
            {selectedTab === 'calculator' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Loan EMI Calculator</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount (₹)
                      </label>
                      <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="range"
                        min="25000"
                        max="5000000"
                        step="25000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interest Rate (% per annum)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="range"
                        min="5"
                        max="20"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Tenure (Years)
                      </label>
                      <input
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Calculation Results</h2>
                  <div className="bg-primary-50 rounded-lg p-6 space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-primary-600 font-medium mb-1">Monthly EMI</p>
                      <p className="text-3xl font-bold text-primary-700">₹{calculateEMI().toLocaleString()}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Principal Amount</p>
                        <p className="text-lg font-semibold text-gray-900">₹{loanAmount.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                        <p className="text-lg font-semibold text-gray-900">₹{totalInterest.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="text-center pt-4 border-t border-primary-200">
                      <p className="text-sm text-gray-600 mb-1">Total Amount Payable</p>
                      <p className="text-xl font-bold text-gray-900">₹{totalAmount.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800">Note</p>
                        <p className="text-xs text-yellow-700 mt-1">
                          This is an approximate calculation. Actual EMI may vary based on bank policies and processing fees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Banking Services Tab */}
            {selectedTab === 'services' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bankingServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-primary-600">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-success-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Bank Partners Tab */}
            {selectedTab === 'partners' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bankPartners.map((bank, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-gray-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{bank.name}</h3>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                        <span>{bank.products} Products</span>
                        <span>★ {bank.rating}</span>
                      </div>
                      <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        View Products
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900">Need Banking Assistance?</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our banking experts are available to help you choose the right financial products and guide you through the application process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Call Us</p>
              <p className="text-sm text-gray-600">1800-BANKING (24/7)</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <ExternalLink className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Online Chat</p>
              <p className="text-sm text-gray-600">Live support available</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Clock className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Visit Branch</p>
              <p className="text-sm text-gray-600">Find nearest branch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banking;