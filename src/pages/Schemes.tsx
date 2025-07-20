import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  ExternalLink, 
  FileText, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  CreditCard
} from 'lucide-react';
import { mockSchemes } from '../data/mockData';

const Schemes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Financial Support', 'Credit Facility', 'Insurance', 'Subsidies', 'Technology'];

  const filteredSchemes = mockSchemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const quickStats = [
    { label: 'Active Schemes', value: '25+', icon: <FileText className="w-6 h-6" />, color: 'blue' },
    { label: 'Beneficiaries', value: '2.5M+', icon: <Users className="w-6 h-6" />, color: 'green' },
    { label: 'Total Funding', value: '₹50,000Cr', icon: <TrendingUp className="w-6 h-6" />, color: 'purple' },
    { label: 'Success Rate', value: '89%', icon: <CheckCircle className="w-6 h-6" />, color: 'emerald' }
  ];

  const applicationSteps = [
    { step: 1, title: 'Check Eligibility', description: 'Review scheme requirements' },
    { step: 2, title: 'Gather Documents', description: 'Collect required certificates' },
    { step: 3, title: 'Submit Application', description: 'Apply online or offline' },
    { step: 4, title: 'Track Status', description: 'Monitor application progress' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Schemes</h1>
          <p className="text-gray-600">
            Access information about latest agricultural policies, subsidies, and financial support programs
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search schemes by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category === 'All' ? '' : category}>
                    {category}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Schemes List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredSchemes.length > 0 ? (
                filteredSchemes.map((scheme) => (
                  <div key={scheme.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{scheme.title}</h3>
                        <p className="text-gray-600 mb-3">{scheme.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                            {scheme.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Deadline: {scheme.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={scheme.applicationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors"
                      >
                        <span>Apply Now</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Eligibility</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {scheme.eligibility.slice(0, 2).map((item, index) => (
                            <li key={index} className="flex items-start space-x-1">
                              <CheckCircle className="w-3 h-3 text-success-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {scheme.benefits.slice(0, 2).map((item, index) => (
                            <li key={index} className="flex items-start space-x-1">
                              <TrendingUp className="w-3 h-3 text-success-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Required Documents</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {scheme.documents.slice(0, 2).map((item, index) => (
                            <li key={index} className="flex items-start space-x-1">
                              <FileText className="w-3 h-3 text-primary-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No schemes found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Application Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Application Process</h2>
              <div className="space-y-4">
                {applicationSteps.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Important Notices</h2>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Deadline Extension</p>
                      <p className="text-xs text-yellow-700 mt-1">
                        PM-KISAN application deadline extended to Dec 31, 2024
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">New Scheme Alert</p>
                      <p className="text-xs text-blue-700 mt-1">
                        Digital Agriculture Mission 2024 applications now open
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h2>
              <div className="space-y-3">
                <a
                  href="tel:1800-123-4567"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <p className="font-medium text-gray-900">Helpline</p>
                  <p className="text-sm text-gray-600">1800-123-4567 (Toll Free)</p>
                </a>
                <a
                  href="mailto:schemes@kisaanmitra.com"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-sm text-gray-600">schemes@kisaanmitra.com</p>
                </a>
                <div className="p-3 border border-gray-200 rounded-lg">
                  <p className="font-medium text-gray-900">Office Hours</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;