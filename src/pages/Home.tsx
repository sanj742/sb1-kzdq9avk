import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Shield, Globe, Zap, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import WeatherCard from '../components/WeatherCard';
import { mockProducts, mockWeatherData } from '../data/mockData';

const Home: React.FC = () => {
  const featuredProducts = mockProducts.slice(0, 3);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Direct Connection',
      description: 'Connect directly with farmers and consumers, eliminating middlemen'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Fair Pricing',
      description: 'Transparent pricing that benefits both farmers and consumers'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assured',
      description: 'Verified organic produce with quality certifications'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Pan-India Network',
      description: 'Access to markets and produce across the entire country'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Updates',
      description: 'Live weather, market prices, and crop advisory services'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Community Support',
      description: 'Supporting rural communities and sustainable agriculture'
    }
  ];

  const stats = [
    { label: 'Active Farmers', value: '50,000+' },
    { label: 'Happy Consumers', value: '2,00,000+' },
    { label: 'Products Listed', value: '1,00,000+' },
    { label: 'States Covered', value: '28' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Connecting
                <span className="text-accent-400"> Farmers </span>
                to
                <span className="text-accent-400"> Consumers</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Direct marketplace for fresh, quality produce. Empowering farmers with fair prices 
                and providing consumers with fresh, organic products straight from the farm.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/marketplace"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explore Marketplace</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/dashboard"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
            <div className="relative animate-bounce-gentle">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy Indian farmers in the field"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-primary-600 font-bold text-2xl">100%</div>
                <div className="text-gray-600 text-sm">Happy Farmers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kisaan Mitra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing agriculture by creating direct connections and providing 
              comprehensive support to the farming community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fresh from Farms
              </h2>
              <p className="text-xl text-gray-600">
                Discover the finest produce from verified farmers across India
              </p>
            </div>
            <Link
              to="/marketplace"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Support
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Updates</h3>
                  <p className="text-gray-600 mb-4">
                    Get real-time weather forecasts, crop-specific alerts, and seasonal recommendations.
                  </p>
                  <Link
                    to="/weather"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                  >
                    <span>View Weather</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Government Schemes</h3>
                  <p className="text-gray-600 mb-4">
                    Access information about latest policies, subsidies, and financial support programs.
                  </p>
                  <Link
                    to="/schemes"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                  >
                    <span>Explore Schemes</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Banking Services</h3>
                  <p className="text-gray-600 mb-4">
                    Compare loans, get financial advice, and access banking services tailored for agriculture.
                  </p>
                  <Link
                    to="/banking"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                  >
                    <span>Banking Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <WeatherCard current={mockWeatherData.current} location={mockWeatherData.location} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and consumers who are already benefiting from our platform. 
            Start your journey towards sustainable and profitable farming today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/register"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Join as Farmer
            </Link>
            <Link
              to="/register"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Join as Consumer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;