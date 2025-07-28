import React, { useState } from 'react';
import { User } from '../App';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  lastUpdated: string;
}

interface InventoryManagementProps {
  user: User | null;
}

const InventoryManagement: React.FC<InventoryManagementProps> = ({ user }) => {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Fertilizer - Organic',
      category: 'Supplies',
      quantity: 500,
      unit: 'kg',
      lastUpdated: '2023-10-15',
    },
    {
      id: '2',
      name: 'Tomato Seeds',
      category: 'Seeds',
      quantity: 1000,
      unit: 'packets',
      lastUpdated: '2023-09-28',
    },
    {
      id: '3',
      name: 'Pesticide - Natural',
      category: 'Supplies',
      quantity: 200,
      unit: 'liters',
      lastUpdated: '2023-10-10',
    },
    {
      id: '4',
      name: 'Irrigation Pipes',
      category: 'Equipment',
      quantity: 50,
      unit: 'pieces',
      lastUpdated: '2023-08-05',
    },
  ]);

  const [newItem, setNewItem] = useState<Omit<InventoryItem, 'id' | 'lastUpdated'>>({ 
    name: '', 
    category: 'Supplies', 
    quantity: 0, 
    unit: 'kg' 
  });

  const handleAddItem = () => {
    if (!newItem.name || newItem.quantity <= 0) return;
    
    const item: InventoryItem = {
      id: Date.now().toString(),
      ...newItem,
      lastUpdated: new Date().toISOString().split('T')[0],
    };

    setInventory([...inventory, item]);
    setNewItem({ name: '', category: 'Supplies', quantity: 0, unit: 'kg' });
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-red-600">Please log in to access Inventory Management</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Inventory Management</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Add New Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={newItem.name}
              onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              placeholder="Enter item name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={newItem.category}
              onChange={(e) => setNewItem({...newItem, category: e.target.value})}
            >
              <option value="Supplies">Supplies</option>
              <option value="Seeds">Seeds</option>
              <option value="Equipment">Equipment</option>
              <option value="Harvest">Harvest</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={newItem.quantity}
              onChange={(e) => setNewItem({...newItem, quantity: parseInt(e.target.value) || 0})}
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={newItem.unit}
              onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
            >
              <option value="kg">kg</option>
              <option value="liters">liters</option>
              <option value="packets">packets</option>
              <option value="pieces">pieces</option>
              <option value="tons">tons</option>
            </select>
          </div>
        </div>
        <button
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          onClick={handleAddItem}
        >
          Add to Inventory
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.quantity} {item.unit}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.lastUpdated}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => setInventory(inventory.filter(i => i.id !== item.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;