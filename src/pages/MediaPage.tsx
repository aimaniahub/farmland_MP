import React from 'react';
import { 
  Calendar, 
  ArrowRight, 
  ExternalLink,
  FileText,
  Video,
  Image as ImageIcon,
  Award,
  Newspaper
} from 'lucide-react';

const MediaPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'GreenFarmlands Launches New Organic Farm Project',
      date: 'June 15, 2023',
      source: 'The Economic Times',
      excerpt: 'GreenFarmlands has launched a new 100-acre organic farm project near Bangalore, offering investment opportunities in sustainable agriculture.',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg',
      link: '#'
    },
    {
      title: 'Sustainable Farming: The Future of Agriculture in India',
      date: 'May 22, 2023',
      source: 'Business Standard',
      excerpt: 'GreenFarmlands CEO discusses the future of sustainable farming in India and how managed farmlands are changing the agricultural landscape.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      link: '#'
    },
    {
      title: 'GreenFarmlands Wins Award for Agricultural Innovation',
      date: 'April 10, 2023',
      source: 'The Hindu',
      excerpt: 'GreenFarmlands has been recognized for its innovative approach to farm management and sustainable agricultural practices.',
      image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
      link: '#'
    },
    {
      title: 'How Managed Farmlands are Attracting Urban Investors',
      date: 'March 5, 2023',
      source: 'Times of India',
      excerpt: 'Urban professionals are increasingly investing in managed farmlands as a way to diversify their portfolio and connect with agriculture.',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg',
      link: '#'
    }
  ];

  const pressReleases = [
    {
      title: 'GreenFarmlands Expands Operations to Karnataka',
      date: 'July 1, 2023',
      excerpt: 'GreenFarmlands announces expansion of operations to multiple districts in Karnataka, with plans to develop over 500 acres of managed farmland.',
      link: '#'
    },
    {
      title: 'GreenFarmlands Partners with Agricultural University',
      date: 'May 15, 2023',
      excerpt: 'New partnership with leading agricultural university to research and implement advanced sustainable farming techniques.',
      link: '#'
    },
    {
      title: 'GreenFarmlands Introduces New Farm Management Technology',
      date: 'April 3, 2023',
      excerpt: 'Launch of proprietary farm management technology that uses IoT and AI to optimize crop yield and resource utilization.',
      link: '#'
    }
  ];

  const events = [
    {
      title: 'Annual Farmland Investment Summit',
      date: 'August 25-26, 2023',
      location: 'Bangalore International Convention Center',
      description: 'Join us for the annual summit on farmland investment opportunities and sustainable agriculture.',
      link: '#'
    },
    {
      title: 'Farm Visit Day: Maamara Farms',
      date: 'July 15, 2023',
      location: 'Maamara Farms, Doddaballapur',
      description: 'Experience our flagship farm project with guided tours, organic food tasting, and investment consultations.',
      link: '#'
    },
    {
      title: 'Webinar: Understanding Farmland ROI',
      date: 'June 30, 2023',
      location: 'Online',
      description: 'Learn about the return on investment potential of managed farmlands and agricultural assets.',
      link: '#'
    }
  ];

  const videos = [
    {
      title: 'GreenFarmlands: Our Story',
      duration: '5:32',
      thumbnail: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg',
      link: '#'
    },
    {
      title: 'Farm Tour: Eco Habitat Farms',
      duration: '8:45',
      thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      link: '#'
    },
    {
      title: 'Sustainable Farming Practices',
      duration: '12:18',
      thumbnail: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Media & News</h1>
            <p className="text-xl text-green-100">
              Stay updated with the latest news, events, and stories from GreenFarmlands
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center">
              View All News
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}></div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.source}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <a 
                    href={article.link} 
                    className="text-green-600 hover:text-green-700 font-medium flex items-center text-sm"
                  >
                    Read Full Article
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Press Releases</h2>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center">
              View All Releases
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{release.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <a 
                  href={release.link} 
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  <FileText className="mr-1 h-4 w-4" />
                  Read Press Release
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center">
              View All Events
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {event.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <a 
                  href={event.link} 
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Video Gallery</h2>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center">
              View All Videos
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${video.thumbnail})` }}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                      <Video className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
                  <a 
                    href={video.link} 
                    className="text-green-600 hover:text-green-700 font-medium flex items-center text-sm"
                  >
                    Watch Video
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured In</h2>
            <p className="text-xl text-gray-600">
              GreenFarmlands has been featured in leading publications
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['The Hindu', 'Economic Times', 'Business Standard', 'Deccan Herald', 'Times of India'].map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">
              Recognizing our commitment to excellence in sustainable agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Best Agricultural Innovation</h3>
              <p className="text-gray-500 text-sm">2023</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Sustainable Business Award</h3>
              <p className="text-gray-500 text-sm">2022</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Excellence in Farm Management</h3>
              <p className="text-gray-500 text-sm">2022</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Organic Farming Leadership</h3>
              <p className="text-gray-500 text-sm">2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-green-100 mb-8">
            Stay updated with the latest news, events, and farm projects
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 text-gray-800"
            />
            <button className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Media Contact</h2>
              <p className="text-gray-600">
                For press inquiries, interview requests, or media kit, please contact our media relations team
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Newspaper className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Press Inquiries</h3>
                  <p className="text-gray-600">press@greenfarmlands.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ImageIcon className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Media Kit</h3>
                  <p className="text-gray-600">Download our media kit with logos, images, and company information</p>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium text-sm">Download Media Kit</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-green-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Interview Requests</h3>
                  <p className="text-gray-600">To schedule an interview with our executives, please email with your request details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;