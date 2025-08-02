import React, { useState } from 'react';
import { 
  MapPin, 
  Plus, 
  Edit, 
  Trash2, 
  Camera, 
  Droplets,
  Thermometer,
  Calendar,
  BarChart3
} from 'lucide-react';
interface User {
  id: string;
  name: string;
  email: string;
}

interface Field {
  id: string;
  name: string;
  size: number;
  soilType: string;
  cropType: string;
  plantingDate: string;
  healthStatus: 'excellent' | 'good' | 'fair' | 'poor';
  location: string;
  lastWatered: string;
  notes: string;
}

interface FieldManagementProps {
  user: User | null;
}

const FieldManagement: React.FC<FieldManagementProps> = ({ user }) => {
  const [fields, setFields] = useState<Field[]>([
    {
      id: '1',
      name: 'North Field A',
      size: 5.2,
      soilType: 'Loamy',
      cropType: 'Tomatoes',
      plantingDate: '2024-03-15',
      healthStatus: 'excellent',
      location: 'GPS: 40.7128, -74.0060',
      lastWatered: '2024-01-15',
      notes: 'High yield variety, organic certified'
    },
    {
      id: '2',
      name: 'South Field B',
      size: 3.8,
      soilType: 'Clay',
      cropType: 'Corn',
      plantingDate: '2024-04-01',
      healthStatus: 'good',
      location: 'GPS: 40.7130, -74.0065',
      lastWatered: '2024-01-14',
      notes: 'Needs drainage improvement'
    },
    {
      id: '3',
      name: 'East Field C',
      size: 2.5,
      soilType: 'Sandy',
      cropType: 'Lettuce',
      plantingDate: '2024-04-10',
      healthStatus: 'fair',
      location: 'GPS: 40.7125, -74.0055',
      lastWatered: '2024-01-13',
      notes: 'Ready for harvest next week'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingField, setEditingField] = useState<Field | null>(null);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Please login to manage your fields
          </h2>
        </div>
      </div>
    );
  }

  const getHealthStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'fair': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleAddField = () => {
    setShowAddForm(true);
    setEditingField(null);
  };

  const handleEditField = (field: Field) => {
    setEditingField(field);
    setShowAddForm(true);
  };

  const handleDeleteField = (fieldId: string) => {
    setFields(fields.filter(field => field.id !== fieldId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Field Management</h1>
          <p className="text-gray-600">Manage your farm fields and monitor crop health</p>
        </div>
        <button
          onClick={handleAddField}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Field</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Fields</p>
              <p className="text-2xl font-bold text-gray-800">{fields.length}</p>
            </div>
            <MapPin className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Area</p>
              <p className="text-2xl font-bold text-gray-800">
                {fields.reduce((sum, field) => sum + field.size, 0).toFixed(1)} acres
              </p>
            </div>
            <BarChart3 className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Healthy Fields</p>
              <p className="text-2xl font-bold text-gray-800">
                {fields.filter(f => f.healthStatus === 'excellent' || f.healthStatus === 'good').length}
              </p>
            </div>
            <Thermometer className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Need Attention</p>
              <p className="text-2xl font-bold text-gray-800">
                {fields.filter(f => f.healthStatus === 'fair' || f.healthStatus === 'poor').length}
              </p>
            </div>
            <Droplets className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map((field) => (
          <div key={field.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Field Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute top-4 right-4">
                <button className="bg-white bg-opacity-90 p-2 rounded-lg hover:bg-opacity-100 transition-all">
                  <Camera className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getHealthStatusColor(field.healthStatus)}`}>
                  {field.healthStatus.charAt(0).toUpperCase() + field.healthStatus.slice(1)}
                </span>
              </div>
            </div>

            {/* Field Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{field.name}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditField(field)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteField(field.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Size:</span>
                  <span className="text-sm font-medium text-gray-800">{field.size} acres</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Crop:</span>
                  <span className="text-sm font-medium text-gray-800">{field.cropType}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Soil Type:</span>
                  <span className="text-sm font-medium text-gray-800">{field.soilType}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Planted:</span>
                  <span className="text-sm font-medium text-gray-800">
                    {new Date(field.plantingDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Last Watered:</span>
                  <span className="text-sm font-medium text-gray-800">
                    {new Date(field.lastWatered).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {field.notes && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">{field.notes}</p>
                </div>
              )}

              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-green-50 text-green-700 py-2 px-3 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
                  <Droplets className="h-4 w-4 inline mr-1" />
                  Water
                </button>
                <button className="flex-1 bg-blue-50 text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                  <Calendar className="h-4 w-4 inline mr-1" />
                  Schedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Field Modal would go here */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {editingField ? 'Edit Field' : 'Add New Field'}
            </h3>
            <p className="text-gray-600 mb-4">Field form would be implemented here</p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FieldManagement;