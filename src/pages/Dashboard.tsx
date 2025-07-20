import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Package, 
  ShoppingCart, 
  Users, 
  Calendar, 
  AlertCircle,
  ArrowRight,
  MapPin,
  Clock
} from 'lucide-react';
import WeatherCard from '../components/WeatherCard';
import { mockWeatherData, mockProducts } from '../data/mockData';
import { useApp } from '../context/AppContext';

const Dashboard: React.FC = () => {
  const { currentUser } = useApp();
  const isFarmer = currentUser?.role === 'farmer';

  const farmerStats = [
    { label: 'Products Listed', value: '12', icon: <Package className="w-6 h-6" />, change: '+2 this month' },
    { label: 'Total Sales', value: '₹45,680', icon: <TrendingUp className="w-6 h-6" />, change: '+15% from last month' },
    { label: 'Active Orders', value: '8', icon: <ShoppingCart className="w-6 h-6" />, change: '3 pending delivery' },
    { label: 'Customer Reviews', value: '4.8/5', icon: <Users className="w-6 h-6" />, change: 'Based on 124 reviews' }
  ];

  const consumerStats = [
    { label: 'Orders Placed', value: '24', icon: <ShoppingCart className="w-6 h-6" />, change: '+3 this month' },
    { label: 'Total Savings', value: '₹2,340', icon: <TrendingUp className="w-6 h-6" />, change: 'vs market prices' },
    { label: 'Favorite Farmers', value: '12', icon: <Users className="w-6 h-6" />, change: 'Trusted suppliers' },
    { label: 'Fresh Deliveries', value: '98%', icon: <Package className="w-6 h-6" />, change: 'Quality guarantee' }
  ];

  const stats = isFarmer ? farmerStats : consumerStats;

  const recentActivity = [
    {
      id: 1,
      type: 'order',
      title: 'New order received',
      description: '5kg Organic Tomatoes ordered by Rajesh Kumar',
      time: '2 hours ago',
      status: 'new'
    },
    {
      id: 2,
      type: 'delivery',
      title: 'Order delivered successfully',
      description: 'Basmati Rice (10kg) delivered to Priya Sharma',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'review',
      title: 'New review received',
      description: '5-star review for Fresh Mangoes from Amit Patil',
      time: '2 days ago',
      status: 'positive'
    }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Harvest tomatoes from Field A', due: 'Tomorrow', priority: 'high' },
    { id: 2, task: 'Update inventory for wheat stock', due: 'Dec 16', priority: 'medium' },
    { id: 3, task: 'Package orders for delivery', due: 'Dec 17', priority: 'high' },
    { id: 4, task: 'Apply for PM-KISAN scheme', due: 'Dec 20', priority: 'low' }
  ];

  const quickActions = isFarmer ? [
    { title: 'Add New Product', href: '/add-product', icon: <Package className="w-5 h-5" /> },
    { title: 'Manage Inventory', href: '/inventory', icon: <TrendingUp className="w-5 h-5" /> },
    { title: 'View Orders', href: '/orders', icon: <ShoppingCart className="w-5 h-5" /> },
    { title: 'Weather Forecast', href: '/weather', icon: <Calendar className="w-5 h-5" /> }
  ] : [
    { title: 'Browse Products', href: '/marketplace', icon: <Package className="w-5 h-5" /> },
    { title: 'Track Orders', href: '/orders', icon: <ShoppingCart className="w-5 h-5" /> },
    { title: 'Saved Farmers', href: '/favorites', icon: <Users className="w-5 h-5" /> },
    { title: 'Weather Updates', href: '/weather', icon: <Calendar className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {currentUser?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            {isFarmer 
              ? "Here's what's happening with your farm business today."
              : "Track your orders and discover fresh produce from local farmers."
            }
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary-600">{stat.icon}</div>
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h3>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.href}
                    className="flex flex-col items-center p-4 text-center rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                  >
                    <div className="text-primary-600 mb-2">{action.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{action.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <Link
                  to="/activity"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'new' ? 'bg-blue-500' :
                      activity.status === 'completed' ? 'bg-success-500' :
                      'bg-yellow-500'
                    }`} />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <div className="flex items-center space-x-1 mt-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Performance / Order History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {isFarmer ? 'Top Performing Products' : 'Recent Orders'}
              </h2>
              <div className="space-y-4">
                {mockProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{product.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">₹{product.price}/{product.unit}</p>
                      <p className="text-xs text-gray-500">{product.quantity} available</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weather Card */}
            <WeatherCard current={mockWeatherData.current} location={mockWeatherData.location} />

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h2>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      task.priority === 'high' ? 'bg-error-500' :
                      task.priority === 'medium' ? 'bg-warning-500' :
                      'bg-success-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{task.task}</p>
                      <p className="text-xs text-gray-500">Due: {task.due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts & Notifications</h2>
              <div className="space-y-3">
                {mockWeatherData.alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    alert.severity === 'high' ? 'border-error-500 bg-error-50' :
                    alert.severity === 'medium' ? 'border-warning-500 bg-warning-50' :
                    'border-success-500 bg-success-50'
                  }`}>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className={`w-4 h-4 mt-0.5 ${
                        alert.severity === 'high' ? 'text-error-500' :
                        alert.severity === 'medium' ? 'text-warning-500' :
                        'text-success-500'
                      }`} />
                      <p className="text-sm text-gray-700">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;