import React, { useState } from 'react';
import { User, UserRole } from '../App';

interface AdminPanelProps {
  user: User | null;
}

interface FarmerUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  farmName: string;
  location: string;
  joinDate: string;
  status: 'active' | 'pending' | 'suspended';
}

interface SystemStats {
  totalUsers: number;
  activeFarms: number;
  totalProducts: number;
  pendingApprovals: number;
  systemHealth: 'good' | 'warning' | 'critical';
  lastBackup: string;
  storageUsed: string;
  storageTotal: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ user }) => {
  const [farmers, setFarmers] = useState<FarmerUser[]>([
    {
      id: 'f1',
      name: 'John Smith',
      email: 'john@greenvalleyfarm.com',
      role: 'farmer',
      farmName: 'Green Valley Farm',
      location: 'Farmington, CA',
      joinDate: '2022-03-15',
      status: 'active',
    },
    {
      id: 'f2',
      name: 'Maria Rodriguez',
      email: 'maria@sunnymeadow.com',
      role: 'farmer',
      farmName: 'Sunny Meadow Farm',
      location: 'Riverside, CA',
      joinDate: '2022-05-22',
      status: 'active',
    },
    {
      id: 'f3',
      name: 'David Johnson',
      email: 'david@beehaven.com',
      role: 'farmer',
      farmName: 'Bee Haven Apiary',
      location: 'Modesto, CA',
      joinDate: '2022-07-10',
      status: 'active',
    },
    {
      id: 'f4',
      name: 'Sarah Williams',
      email: 'sarah@rootleaf.com',
      role: 'farmer',
      farmName: 'Root & Leaf Farm',
      location: 'Fresno, CA',
      joinDate: '2022-09-05',
      status: 'pending',
    },
    {
      id: 'f5',
      name: 'Michael Chen',
      email: 'michael@organicvalley.com',
      role: 'farmer',
      farmName: 'Organic Valley',
      location: 'Sacramento, CA',
      joinDate: '2022-11-18',
      status: 'suspended',
    },
  ]);

  const [systemStats, setSystemStats] = useState<SystemStats>({
    totalUsers: 42,
    activeFarms: 38,
    totalProducts: 156,
    pendingApprovals: 3,
    systemHealth: 'good',
    lastBackup: '2023-10-15 03:00 AM',
    storageUsed: '1.2 GB',
    storageTotal: '10 GB',
  });

  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'settings'>('dashboard');

  const handleStatusChange = (farmerId: string, newStatus: FarmerUser['status']) => {
    setFarmers(farmers.map(farmer => 
      farmer.id === farmerId ? { ...farmer, status: newStatus } : farmer
    ));
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
          <p className="font-bold">Access Denied</p>
          <p>You do not have permission to access the admin panel. This area is restricted to administrators only.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Admin Panel</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'dashboard' 
                ? 'border-b-2 border-green-500 text-green-600' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'users' 
                ? 'border-b-2 border-green-500 text-green-600' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => setActiveTab('users')}
            >
              User Management
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'settings' 
                ? 'border-b-2 border-green-500 text-green-600' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => setActiveTab('settings')}
            >
              System Settings
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">System Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-sm text-gray-500">Total Users</p>
                  <p className="text-2xl font-bold text-gray-800">{systemStats.totalUsers}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-sm text-gray-500">Active Farms</p>
                  <p className="text-2xl font-bold text-gray-800">{systemStats.activeFarms}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-sm text-gray-500">Total Products</p>
                  <p className="text-2xl font-bold text-gray-800">{systemStats.totalProducts}</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <p className="text-sm text-gray-500">Pending Approvals</p>
                  <p className="text-2xl font-bold text-gray-800">{systemStats.pendingApprovals}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-700">System Health</h3>
                  <div className="bg-white border border-gray-200 rounded-md p-4">
                    <div className="flex items-center mb-4">
                      <div className={`h-4 w-4 rounded-full mr-2 ${{
                        'good': 'bg-green-500',
                        'warning': 'bg-yellow-500',
                        'critical': 'bg-red-500'
                      }[systemStats.systemHealth]}`}></div>
                      <p className="font-medium text-gray-700">
                        System Status: <span className="capitalize">{systemStats.systemHealth}</span>
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-500">Last Backup</p>
                        <p className="font-medium">{systemStats.lastBackup}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Storage Usage</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                          <div 
                            className="bg-green-600 h-2.5 rounded-full" 
                            style={{ width: `${(parseInt(systemStats.storageUsed) / parseInt(systemStats.storageTotal)) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500">{systemStats.storageUsed} of {systemStats.storageTotal} used</p>
                      </div>
                    </div>
                    <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                      Run System Diagnostics
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Recent Activity</h3>
                  <div className="bg-white border border-gray-200 rounded-md p-4 h-64 overflow-y-auto">
                    <ul className="space-y-3">
                      <li className="border-b border-gray-100 pb-2">
                        <p className="text-sm"><span className="font-medium">New user registration:</span> Sarah Williams (Root & Leaf Farm)</p>
                        <p className="text-xs text-gray-500">Today, 10:23 AM</p>
                      </li>
                      <li className="border-b border-gray-100 pb-2">
                        <p className="text-sm"><span className="font-medium">Product added:</span> Organic Tomatoes by Green Valley Farm</p>
                        <p className="text-xs text-gray-500">Yesterday, 3:45 PM</p>
                      </li>
                      <li className="border-b border-gray-100 pb-2">
                        <p className="text-sm"><span className="font-medium">System backup:</span> Automatic backup completed</p>
                        <p className="text-xs text-gray-500">Yesterday, 3:00 AM</p>
                      </li>
                      <li className="border-b border-gray-100 pb-2">
                        <p className="text-sm"><span className="font-medium">User status change:</span> Michael Chen (Suspended)</p>
                        <p className="text-xs text-gray-500">Oct 15, 2023, 11:30 AM</p>
                      </li>
                      <li className="border-b border-gray-100 pb-2">
                        <p className="text-sm"><span className="font-medium">New product category:</span> Honey Products added</p>
                        <p className="text-xs text-gray-500">Oct 14, 2023, 9:15 AM</p>
                      </li>
                      <li>
                        <p className="text-sm"><span className="font-medium">System update:</span> Platform updated to version 2.3.0</p>
                        <p className="text-xs text-gray-500">Oct 12, 2023, 6:00 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'users' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                  Add New User
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farm</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {farmers.map((farmer) => (
                      <tr key={farmer.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium">
                              {farmer.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{farmer.name}</div>
                              <div className="text-sm text-gray-500">{farmer.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{farmer.farmName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{farmer.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{farmer.joinDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            farmer.status === 'active' ? 'bg-green-100 text-green-800' :
                            farmer.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {farmer.status.charAt(0).toUpperCase() + farmer.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                            {farmer.status === 'pending' && (
                              <button 
                                className="text-green-600 hover:text-green-900"
                                onClick={() => handleStatusChange(farmer.id, 'active')}
                              >
                                Approve
                              </button>
                            )}
                            {farmer.status === 'active' && (
                              <button 
                                className="text-red-600 hover:text-red-900"
                                onClick={() => handleStatusChange(farmer.id, 'suspended')}
                              >
                                Suspend
                              </button>
                            )}
                            {farmer.status === 'suspended' && (
                              <button 
                                className="text-green-600 hover:text-green-900"
                                onClick={() => handleStatusChange(farmer.id, 'active')}
                              >
                                Reactivate
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">System Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-700">General Settings</h3>
                  <div className="bg-white border border-gray-200 rounded-md p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value="Farmland Management Platform"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
                        <input
                          type="email"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value="admin@farmlandplatform.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Default Language</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="maintenance-mode"
                          type="checkbox"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="maintenance-mode" className="ml-2 block text-sm text-gray-700">
                          Enable Maintenance Mode
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Security Settings</h3>
                  <div className="bg-white border border-gray-200 rounded-md p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password Policy</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                          <option>Strong (min. 12 chars, special chars required)</option>
                          <option>Medium (min. 8 chars, mixed case required)</option>
                          <option>Basic (min. 6 chars)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Session Timeout (minutes)</label>
                        <input
                          type="number"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value="30"
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          id="two-factor"
                          type="checkbox"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          checked
                        />
                        <label htmlFor="two-factor" className="ml-2 block text-sm text-gray-700">
                          Require Two-Factor Authentication for Admins
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="ip-restriction"
                          type="checkbox"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="ip-restriction" className="ml-2 block text-sm text-gray-700">
                          Enable IP Restriction for Admin Access
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium mb-3 text-gray-700">Backup & Maintenance</h3>
                  <div className="bg-white border border-gray-200 rounded-md p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Automatic Backup Schedule</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                          <option>Daily (at 3:00 AM)</option>
                          <option>Weekly (Sundays at 2:00 AM)</option>
                          <option>Monthly (1st day at 1:00 AM)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Retain Backups For</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                          <option>30 days</option>
                          <option>60 days</option>
                          <option>90 days</option>
                          <option>1 year</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                        Run Manual Backup
                      </button>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                        Restore from Backup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300 mr-2">
                  Cancel
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;