import React from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Leaf,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rajesh Gupta',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: '15+ years in agriculture and real estate development. Passionate about sustainable farming.'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: 'Agricultural engineer with expertise in farm management and sustainable practices.'
    },
    {
      name: 'Amit Kumar',
      position: 'Head of Sales',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Real estate veteran with deep understanding of agricultural land investments.'
    },
    {
      name: 'Dr. Sunita Reddy',
      position: 'Agricultural Advisor',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'PhD in Agricultural Sciences, specializing in organic farming and soil health.'
    }
  ];

  const impactStats = [
    { number: '1000+', label: 'Acres Under Management', icon: Globe },
    { number: '500+', label: 'Happy Investors', icon: Users },
    { number: '₹50Cr+', label: 'Investment Facilitated', icon: TrendingUp },
    { number: '15%', label: 'Average Annual Returns', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About GreenFarmlands</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Pioneering the future of agricultural investment through managed farmlands, 
              sustainable practices, and innovative farming solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2014, GreenFarmlands began with a simple yet powerful vision: 
                  to make agricultural investment accessible to everyone while promoting 
                  sustainable farming practices that benefit both investors and the environment.
                </p>
                <p>
                  Our founder, Rajesh Gupta, witnessed the challenges faced by both urban 
                  investors seeking reliable returns and farmers struggling with modern 
                  agricultural practices. This inspired the creation of a platform that 
                  bridges this gap through professionally managed farmlands.
                </p>
                <p>
                  Today, we manage over 1000 acres of farmland across Karnataka, helping 
                  hundreds of investors build wealth while contributing to sustainable 
                  agriculture and rural development.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, from implementing 
                  cutting-edge irrigation systems to developing organic farming protocols 
                  that maximize both yield and environmental benefits.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
                alt="Our farming journey"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become India's leading managed farmland company, creating sustainable 
                agricultural ecosystems that benefit investors, farmers, and the environment.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize agricultural investment by providing hassle-free, 
                professionally managed farmland opportunities that deliver consistent 
                returns while promoting sustainable farming practices.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Transparency in all dealings</li>
                <li>• Commitment to sustainability</li>
                <li>• Excellence in service</li>
                <li>• Innovation in agriculture</li>
                <li>• Community development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your agricultural investment success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-green-600 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-green-100">
              Creating positive change in agriculture and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 mr-3" />
                  100% organic farming practices across all projects
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 mr-3" />
                  50% reduction in water usage through drip irrigation
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 mr-3" />
                  Carbon neutral farming operations
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 mr-3" />
                  Biodiversity conservation in all farm projects
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Community Impact</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  200+ local jobs created in rural areas
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Skill development programs for farmers
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Healthcare support for farming communities
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Educational scholarships for farmers' children
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">
              Recognized for excellence in sustainable agriculture and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Best Sustainable Agriculture Company
              </h3>
              <p className="text-gray-600">Karnataka Agriculture Awards 2023</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Innovation in Agri-Tech
              </h3>
              <p className="text-gray-600">India Agri Summit 2022</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Top Employer in Agriculture
              </h3>
              <p className="text-gray-600">Rural Development Council 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;