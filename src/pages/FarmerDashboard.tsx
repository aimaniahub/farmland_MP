import React from 'react';
import { 
  BarChart3, 
  MapPin, 
  Users, 
  Calendar, 
  Package, 
  AlertTriangle,
  TrendingUp,
  Droplets,
  Thermometer,
  Wind,
  Plus
} from 'lucide-react';
import { User } from '../App';
import { Link } from 'react-router-dom';

interface FarmerDashboardProps {
  user: User | null;
}

const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Please login to access your dashboard
          </h2>
        </div>
      </div>
    );
  }

  const stats = [
    { label: 'Total Fields', value: '12', icon: MapPin, color: 'green', trend: '+2 this month' },
    { label: 'Active Crops', value: '8', icon: Package, color: 'blue', trend: '3 ready for harvest' },
    { label: 'Team Members', value: '15', icon: Users, color: 'purple', trend: '2 working today' },
    { label: 'Pending Tasks', value: '7', icon: Calendar, color: 'orange', trend: '3 due today' },
  ];

  const recentActivities = [
    { task: 'Irrigated Field A-1', time: '2 hours ago', status: 'completed' },
    { task: 'Applied fertilizer to Tomato Field', time: '5 hours ago', status: 'completed' },
    { task: 'Harvested Lettuce - Block 3', time: '1 day ago', status: 'completed' },
    { task: 'Pest inspection due', time: 'Today', status: 'pending' },
    { task: 'Equipment maintenance', time: 'Tomorrow', status: 'scheduled' },
  ];

  const weatherData = {
    temperature: 24,
    humidity: 65,
    windSpeed: 12,
    condition: 'Partly Cloudy'
  };

  const alerts = [
    { type: 'warning', message: 'Rain expected tomorrow - check irrigation schedule' },
    { type: 'info', message: 'Tomato field ready for harvest in 3 days' },
    { type: 'urgent', message: 'Low fertilizer stock - reorder needed' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user.name}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening at {user.farmName} today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
            <div className="text-xs text-green-600">{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              to="/fields"
              className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
            >
              <Plus className="h-5 w-5 text-green-600" />
              <span className="text-green-700 font-medium">Add New Field</span>
            </Link>
            <Link
              to="/tasks"
              className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Schedule Task</span>
            </Link>
            <Link
              to="/inventory"
              className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
            >
              <Package className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Update Inventory</span>
            </Link>
          </div>
        </div>

        {/* Weather Widget */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Current Weather</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{weatherData.temperature}°C</div>
                <div className="text-blue-100">{weatherData.condition}</div>
              </div>
              <Thermometer className="h-12 w-12 text-blue-200" />
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-400">
              <div className="flex items-center space-x-2">
                <Droplets className="h-4 w-4 text-blue-200" />
                <span className="text-sm">{weatherData.humidity}% Humidity</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="h-4 w-4 text-blue-200" />
                <span className="text-sm">{weatherData.windSpeed} km/h</span>
              </div>
            </div>
            <Link
              to="/weather"
              className="block text-center text-sm text-blue-100 hover:text-white border border-blue-400 rounded-lg py-2 hover:bg-blue-400 transition-colors"
            >
              View Full Forecast
            </Link>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Alerts & Notifications</h3>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 p-3 rounded-lg ${
                  alert.type === 'urgent'
                    ? 'bg-red-50 border border-red-200'
                    : alert.type === 'warning'
                    ? 'bg-yellow-50 border border-yellow-200'
                    : 'bg-blue-50 border border-blue-200'
                }`}
              >
                <AlertTriangle
                  className={`h-5 w-5 mt-0.5 ${
                    alert.type === 'urgent'
                      ? 'text-red-500'
                      : alert.type === 'warning'
                      ? 'text-yellow-500'
                      : 'text-blue-500'
                  }`}
                />
                <p className="text-sm text-gray-700">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{activity.task}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : activity.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;