import React, { useEffect, useRef, useState } from 'react';
import {
  Users,
  Target,
  Heart,
  Leaf,
  TrendingUp,
  Shield,
  Globe,
  MapPin,
  Award,
  CheckCircle,
  Calendar,
  Building
} from 'lucide-react';
import about from '../content/about.json';

const iconMap = {
  Users: Users,
  Target: Target,
  Heart: Heart,
  Award: Award,
  Leaf: Leaf,
  TrendingUp: TrendingUp,
  Shield: Shield,
  Globe: Globe,
  MapPin: MapPin,
  CheckCircle: CheckCircle,
  Calendar: Calendar,
  Building: Building,
};

// Simple hook to detect when an element enters the viewport
const useInView = (options: IntersectionObserverInit = { threshold: 0.15 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // trigger once
        }
      });
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return { ref, inView } as const;
};

const AboutUs: React.FC = () => {
  const { ref: timelineRef, inView: timelineInView } = useInView();
  const { ref: visionRef, inView: visionInView } = useInView();

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

      {/* Our Story with Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{about.story.title}</h2>
                <div className="space-y-4 text-gray-600">
                  {about.story.paragraphs.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}
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

            {/* Company Timeline */}
            <div ref={timelineRef as any} className="relative">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
                {[
                  { year: '2020', title: 'Company Founded', desc: 'Started with a vision to democratize farmland investment' },
                  { year: '2021', title: 'First Farm Project', desc: 'Launched our inaugural managed farmland project' },
                  { year: '2022', title: '500+ Investors', desc: 'Reached milestone of 500 satisfied investors' },
                  { year: '2023', title: 'Expansion', desc: 'Expanded operations across Karnataka' },
                  { year: '2024', title: 'Sustainable Future', desc: 'Leading the way in sustainable agriculture practices' },
                ].map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center mb-8 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} ${timelineInView ? 'animate-fadeInUp' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                        <div className="text-green-600 font-bold text-lg">{milestone.year}</div>
                        <h4 className="font-semibold text-gray-800">{milestone.title}</h4>
                        <p className="text-gray-600 text-sm">{milestone.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional story content with imagery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="space-y-4 text-gray-600">
                {about.story.paragraphs.slice(2).map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop" alt="Farm landscape" className="rounded-lg shadow-md" />
                <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop" alt="Sustainable farming" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values - Enhanced Cards */}
      <section ref={visionRef as any} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: about.vision_mission_values.vision.title,
                desc: about.vision_mission_values.vision.description,
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
                iconColor: 'text-blue-600'
              },
              {
                icon: Heart,
                title: about.vision_mission_values.mission.title,
                desc: about.vision_mission_values.mission.description,
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50',
                iconColor: 'text-green-600'
              },
              {
                icon: Shield,
                title: about.vision_mission_values.values.title,
                desc: about.vision_mission_values.values.list.join(', '),
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
                iconColor: 'text-purple-600'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 ${visionInView ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`${item.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 mx-auto`}></div>
              </div>
            ))}
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