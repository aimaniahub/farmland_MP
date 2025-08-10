import React from 'react';
import { Award, Users, TreePine, Target } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-6">
              Our Strategic Partner
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are proud to partner with <span className="font-semibold text-green-800">Darvi Group</span>,
              the leading experts in sustainable Sandalwood cultivation. Their decades of experience and
              innovative farming techniques ensure exceptional returns and sustainable agricultural practices
              for all our managed farmland investments.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          {/* Darvi partner card */}
          <ScrollAnimation delay={200}>
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 mb-16">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="h-16 md:h-20 w-32 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-800 font-bold text-lg">Darvi Group</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-green-900">Darvi Group</h3>
                  <p className="mt-3 text-gray-600 max-w-2xl">
                    Sandalwood cultivation experts partnering with us to design, plant and manage thriving sandalwood
                    plantations with sustainable, research‑driven practices.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Darvi focus: What they do */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={300}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6">
                  <TreePine className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">Sandalwood Specialists</h3>
                <p className="text-gray-600 leading-relaxed">
                  End‑to‑end sandalwood cultivation expertise: seedling selection, host crop planning, spacing and pruning.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-yellow-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">Proven Practices</h3>
                <p className="text-gray-600 leading-relaxed">
                  Research‑driven agronomy, pest management and irrigation schedules refined across multiple plantations.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-4">Showcase & Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Demonstrated results from live projects and model plots that showcase growth, survival and yield.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
