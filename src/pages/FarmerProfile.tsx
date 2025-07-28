import React, { useState } from 'react';
import { User } from '../App';

interface FarmerProfileProps {
  user: User | null;
}

interface FarmDetails {
  name: string;
  location: string;
  size: number;
  established: number;
  description: string;
  certifications: string[];
  contactEmail: string;
  contactPhone: string;
}

const FarmerProfile: React.FC<FarmerProfileProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [farmDetails, setFarmDetails] = useState<FarmDetails>({
    name: 'Green Valley Farm',
    location: '123 Rural Road, Farmington, CA 95230',
    size: 45,
    established: 2005,
    description: 'Green Valley Farm is a family-owned organic farm specializing in sustainable farming practices. We grow a variety of seasonal vegetables, fruits, and herbs without the use of synthetic pesticides or fertilizers.',
    certifications: ['USDA Organic', 'Certified Naturally Grown', 'Bee Friendly Farming'],
    contactEmail: 'info@greenvalleyfarm.com',
    contactPhone: '(555) 123-4567',
  });

  const [formData, setFormData] = useState<FarmDetails>(farmDetails);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, value],
      });
    } else {
      setFormData({
        ...formData,
        certifications: formData.certifications.filter(cert => cert !== value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFarmDetails(formData);
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-red-600">Please log in to view your profile</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Farmer Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-700 h-32 flex items-end p-6">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-green-700 text-2xl font-bold border-4 border-white">
              {user.name.charAt(0)}
            </div>
            <div className="ml-4 text-white">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {!isEditing ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Farm Details</h3>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Edit Profile
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Farm Information</h4>
                  <div className="bg-gray-50 rounded-md p-4">
                    <p className="mb-2"><span className="font-medium">Farm Name:</span> {farmDetails.name}</p>
                    <p className="mb-2"><span className="font-medium">Location:</span> {farmDetails.location}</p>
                    <p className="mb-2"><span className="font-medium">Farm Size:</span> {farmDetails.size} acres</p>
                    <p className="mb-2"><span className="font-medium">Established:</span> {farmDetails.established}</p>
                    <p className="mb-2"><span className="font-medium">Description:</span></p>
                    <p className="text-gray-600">{farmDetails.description}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Certifications</h4>
                  <div className="bg-gray-50 rounded-md p-4">
                    <ul className="list-disc list-inside">
                      {farmDetails.certifications.map((cert, index) => (
                        <li key={index} className="mb-1">{cert}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-700 mt-6 mb-2">Contact Information</h4>
                  <div className="bg-gray-50 rounded-md p-4">
                    <p className="mb-2"><span className="font-medium">Email:</span> {farmDetails.contactEmail}</p>
                    <p><span className="font-medium">Phone:</span> {farmDetails.contactPhone}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Farm Statistics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                    <p className="text-3xl font-bold text-green-700">12</p>
                    <p className="text-gray-600">Active Fields</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                    <p className="text-3xl font-bold text-green-700">8</p>
                    <p className="text-gray-600">Crop Varieties</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                    <p className="text-3xl font-bold text-green-700">24</p>
                    <p className="text-gray-600">Products Listed</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Edit Farm Details</h3>
                <div>
                  <button 
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData(farmDetails);
                    }}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300 mr-2"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Farm Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Farm Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size (acres)</label>
                        <input
                          type="number"
                          name="size"
                          value={formData.size}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Established (year)</label>
                        <input
                          type="number"
                          name="established"
                          value={formData.established}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Certifications</h4>
                  <div className="bg-gray-50 rounded-md p-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cert1"
                          value="USDA Organic"
                          checked={formData.certifications.includes('USDA Organic')}
                          onChange={handleCertificationChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="cert1" className="ml-2 block text-sm text-gray-700">USDA Organic</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cert2"
                          value="Certified Naturally Grown"
                          checked={formData.certifications.includes('Certified Naturally Grown')}
                          onChange={handleCertificationChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="cert2" className="ml-2 block text-sm text-gray-700">Certified Naturally Grown</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cert3"
                          value="Bee Friendly Farming"
                          checked={formData.certifications.includes('Bee Friendly Farming')}
                          onChange={handleCertificationChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="cert3" className="ml-2 block text-sm text-gray-700">Bee Friendly Farming</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cert4"
                          value="Non-GMO Project Verified"
                          checked={formData.certifications.includes('Non-GMO Project Verified')}
                          onChange={handleCertificationChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="cert4" className="ml-2 block text-sm text-gray-700">Non-GMO Project Verified</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="cert5"
                          value="Regenerative Organic Certified"
                          checked={formData.certifications.includes('Regenerative Organic Certified')}
                          onChange={handleCertificationChange}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="cert5" className="ml-2 block text-sm text-gray-700">Regenerative Organic Certified</label>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-700 mt-6 mb-2">Contact Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="text"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;