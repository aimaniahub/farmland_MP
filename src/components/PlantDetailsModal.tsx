import React, { useState } from 'react';
import { Plant } from '../types/plant';

interface Props {
  isOpen: boolean;
  plant: Plant | null;
  onClose: () => void;
  onProceed: (plant: Plant, quantity: number) => void;
}

const PlantDetailsModal: React.FC<Props> = ({ isOpen, plant, onClose, onProceed }) => {
  const [qty, setQty] = useState<number>(1);

  if (!isOpen || !plant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-full">
            <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#2A2A2A]">{plant.name}</h3>
                <p className="text-sm italic text-gray-500">{plant.scientificName}</p>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <p className="text-sm text-gray-600">{plant.description}</p>

            <div>
              <h4 className="font-semibold text-[#2A2A2A] mb-2">Growing conditions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Sunlight: {plant.conditions.sunlight}</li>
                <li>Watering: {plant.conditions.watering}</li>
                <li>Climate: {plant.conditions.climate}</li>
                <li>Maintenance: {plant.conditions.maintenance}</li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Starting from</p>
                <p className="text-xl font-bold text-[#4A7C59]">₹{plant.priceFrom}</p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600" htmlFor="qty">Qty</label>
                <input id="qty" type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="w-20 border rounded-lg px-3 py-2" />
              </div>
            </div>

            <button onClick={() => onProceed(plant, qty)} className="w-full rounded-xl px-4 py-3 text-white bg-[#C68B59] hover:opacity-90">Add & Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailsModal;
