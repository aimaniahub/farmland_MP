import React from 'react';
import {
  Users,
  Target,
  Heart,
  Leaf,
  TrendingUp,
  Shield,
  Globe,
  MapPin,
  Award, // Correctly import the Award icon here
} from 'lucide-react';
import about from '../content/about.json';

const iconMap = {
  Users: Users,
  Target: Target,
  Heart: Heart,
  Award: Award, // This will now work correctly
  Leaf: Leaf,
  TrendingUp: TrendingUp,
  Shield: Shield,
  Globe: Globe,
  MapPin: MapPin,
};

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-b-3xl">
        <div className="absolute inset-0 bg-black/20 rounded-b-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-green-200 text-sm font-medium">{about.hero.pre_title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{about.hero.title}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            {about.hero.description}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{about.story.title}</h2>
                <div className="space-y-4 text-gray-600">
                  {about.story.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              <div className="relative">
                <img
                  src={about.story.image}
                  alt={about.story.image_caption}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">{about.story.stat.value}</div>
                  <div className="text-sm">{about.story.stat.label}</div>
                </div>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{about.vision_mission_values.vision.title}</h3>
              <p className="text-gray-600">
                {about.vision_mission_values.vision.description}
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{about.vision_mission_values.mission.title}</h3>
              <p className="text-gray-600">
                {about.vision_mission_values.mission.description}
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{about.vision_mission_values.values.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {about.vision_mission_values.values.list.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{about.team.title}</h2>
              <p className="text-xl text-gray-600">
                {about.team.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {about.team.members.map((member, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
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
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-green-600 text-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{about.impact.title}</h2>
            <p className="text-xl text-green-100">
              {about.impact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {about.achievements.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap] || Users;
              return (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">{about.impact.environmental_impact.title}</h3>
              <ul className="space-y-3 text-green-100">
                {about.impact.environmental_impact.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <Leaf className="h-5 w-5 mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">{about.impact.community_impact.title}</h3>
              <ul className="space-y-3 text-green-100">
                {about.impact.community_impact.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <Users className="h-5 w-5 mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;