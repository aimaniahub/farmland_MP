import React from 'react';
import SandalwoodHero from '../components/sandalwood/SandalwoodHero';
import SandalwoodEducation from '../components/sandalwood/SandalwoodEducation';
import SandalwoodPriceChart from '../components/sandalwood/SandalwoodPriceChart';
import SandalwoodSpecs from '../components/sandalwood/SandalwoodSpecs';
import SandalwoodBookingForm from '../components/sandalwood/SandalwoodBookingForm';

const SandalwoodPage: React.FC = () => {
  return (
    <div className="bg-[#FAFAF7]">
      <SandalwoodHero />
      <SandalwoodEducation />
      <SandalwoodPriceChart />
      <SandalwoodSpecs />
      <SandalwoodBookingForm />
    </div>
  );
};

export default SandalwoodPage;
