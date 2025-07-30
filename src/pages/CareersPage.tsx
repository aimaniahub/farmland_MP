import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  Users,
  Leaf,
  TrendingUp,
  Heart,
  Send,
  FileText,
  CheckCircle
} from 'lucide-react';

interface JobListing {
  id: number;
  title: string;
  location: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const CareersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
    referral: ''
  });

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'operations', name: 'Operations' },
    { id: 'sales', name: 'Sales & Marketing' },
    { id: 'technology', name: 'Technology' },
    { id: 'finance', name: 'Finance' },
    { id: 'hr', name: 'Human Resources' }
  ];

  const jobListings: JobListing[] = [
    {
      id: 1,
      title: 'Farm Manager',
      location: 'Bangalore Rural, Karnataka',
      department: 'agriculture',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced Farm Manager to oversee day-to-day operations at our flagship farm project. The ideal candidate will have extensive experience in commercial farming and team management.',
      responsibilities: [
        'Oversee all aspects of farm operations including planting, irrigation, pest control, and harvesting',
        'Manage farm staff and coordinate with contractors',
        'Implement and maintain sustainable farming practices',
        'Monitor crop health and implement interventions as needed',
        'Maintain detailed records of farm activities and production',
        'Ensure compliance with organic certification standards',
        'Optimize farm productivity and resource utilization'
      ],
      requirements: [
        "Bachelor's degree in Agriculture, Horticulture, or related field",
        '3-5 years of experience in commercial farm management',
        'Strong knowledge of sustainable farming practices',
        'Experience with irrigation systems and farm equipment',
        'Excellent leadership and communication skills',
        'Proficiency in farm management software',
        'Willingness to live on or near the farm location'
      ],
      benefits: [
        'Competitive salary package',
        'Performance-based bonuses',
        'Health insurance coverage',
        'Housing allowance or on-farm accommodation',
        'Professional development opportunities',
        'Farm produce benefits',
        'Retirement benefits'
      ]
    },
    {
      id: 2,
      title: 'Agricultural Scientist',
      location: 'Bangalore, Karnataka',
      department: 'agriculture',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'We are seeking an Agricultural Scientist to join our research team focused on optimizing crop yields and implementing sustainable farming practices across our farm projects.',
      responsibilities: [
        'Conduct research on crop varieties suitable for different farm locations',
        'Develop and implement soil health improvement strategies',
        'Monitor and analyze crop performance data',
        'Recommend interventions to improve yields and sustainability',
        'Collaborate with farm managers on implementing best practices',
        'Stay updated on latest agricultural research and technologies',
        'Prepare detailed reports on research findings and recommendations'
      ],
      requirements: [
        "Master's degree in Agricultural Science, Soil Science, or related field",
        '2-4 years of experience in agricultural research',
        'Strong knowledge of soil health and crop nutrition',
        'Experience with field trials and data analysis',
        'Familiarity with sustainable and organic farming practices',
        'Excellent analytical and problem-solving skills',
        'Good communication and reporting skills'
      ],
      benefits: [
        'Competitive salary package',
        'Research and publication opportunities',
        'Health insurance coverage',
        'Flexible work arrangements',
        'Professional development budget',
        'Collaborative research environment',
        'Retirement benefits'
      ]
    },
    {
      id: 3,
      title: 'Farm Investment Advisor',
      location: 'Mumbai, Maharashtra',
      department: 'sales',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'We are looking for a Farm Investment Advisor to join our sales team. The ideal candidate will help potential investors understand the benefits of farmland investment and guide them through the investment process.',
      responsibilities: [
        'Educate potential investors about farmland investment opportunities',
        'Conduct investment consultations and farm site visits',
        'Prepare and present investment proposals',
        'Guide clients through the investment process',
        'Maintain relationships with existing investors',
        'Collaborate with marketing team on investment materials',
        'Stay updated on market trends and competitive offerings'
      ],
      requirements: [
        "Bachelor's degree in Finance, Business, or related field",
        '3-6 years of experience in investment sales or real estate',
        'Strong understanding of investment principles',
        'Excellent communication and presentation skills',
        'Sales experience with high-value transactions',
        'Basic understanding of agriculture and farming',
        'SEBI registration or relevant certifications preferred'
      ],
      benefits: [
        'Competitive base salary plus commission structure',
        'Performance incentives and bonuses',
        'Health insurance coverage',
        'Travel allowance',
        'Professional development opportunities',
        'Retirement benefits',
        'Team retreats and events'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Bangalore, Karnataka',
      department: 'sales',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'We are seeking a Digital Marketing Specialist to develop and implement marketing strategies that increase brand awareness and generate qualified leads for our farmland investment opportunities.',
      responsibilities: [
        'Manage and optimize digital marketing campaigns across platforms',
        'Create engaging content for website, social media, and email campaigns',
        'Analyze campaign performance and optimize for lead generation',
        'Manage SEO strategy and implementation',
        'Coordinate with content creators and designers',
        'Manage marketing automation and CRM systems',
        'Track and report on key marketing metrics'
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        '2-4 years of experience in digital marketing',
        'Proven track record in lead generation campaigns',
        'Experience with SEO, SEM, and social media marketing',
        'Proficiency in marketing analytics tools',
        'Strong content creation and copywriting skills',
        'Experience with marketing automation platforms'
      ],
      benefits: [
        'Competitive salary package',
        'Performance bonuses',
        'Health insurance coverage',
        'Flexible work arrangements',
        'Professional development budget',
        'Modern office environment',
        'Retirement benefits'
      ]
    },
    {
      id: 5,
      title: 'Farm Operations Coordinator',
      location: 'Multiple Locations',
      department: 'operations',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'We are looking for a Farm Operations Coordinator to support our farm management team in ensuring smooth day-to-day operations across multiple farm locations.',
      responsibilities: [
        'Coordinate farm activities between headquarters and farm sites',
        'Manage inventory of farm supplies and equipment',
        'Schedule and coordinate farm maintenance activities',
        'Assist in preparing operational reports and documentation',
        'Coordinate with vendors and service providers',
        'Support farm managers with administrative tasks',
        'Help organize farm visits for investors and stakeholders'
      ],
      requirements: [
        "Bachelor's degree in Agriculture, Business, or related field",
        '1-3 years of experience in operations or farm management',
        'Strong organizational and coordination skills',
        'Proficiency in MS Office and project management tools',
        'Excellent communication skills',
        "Valid driver's license and willingness to travel to farm sites",
        'Basic understanding of agricultural operations'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance coverage',
        'Travel allowance',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Farm produce benefits',
        'Retirement benefits'
      ]
    },
    {
      id: 6,
      title: 'AgriTech Developer',
      location: 'Bangalore, Karnataka',
      department: 'technology',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'We are seeking an AgriTech Developer to build and maintain technology solutions that enhance our farm management capabilities and investor experience.',
      responsibilities: [
        'Develop and maintain farm management software applications',
        'Create data visualization tools for farm performance metrics',
        'Implement IoT solutions for farm monitoring',
        'Integrate various data sources into unified dashboards',
        'Collaborate with farm managers to understand technology needs',
        'Ensure data security and privacy compliance',
        'Provide technical support and training to users'
      ],
      requirements: [
        "Bachelor's degree in Computer Science, IT, or related field",
        '2-5 years of software development experience',
        'Proficiency in full-stack development',
        'Experience with data visualization and analytics',
        'Knowledge of IoT technologies is a plus',
        'Understanding of agricultural processes is beneficial',
        'Strong problem-solving and analytical skills'
      ],
      benefits: [
        'Competitive salary package',
        'Performance bonuses',
        'Health insurance coverage',
        'Flexible work arrangements',
        'Professional development budget',
        'Modern office environment',
        'Retirement benefits'
      ]
    },
    {
      id: 7,
      title: 'Finance Analyst',
      location: 'Bangalore, Karnataka',
      department: 'finance',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'We are looking for a Finance Analyst to join our team and help manage the financial aspects of our farm projects and investment offerings.',
      responsibilities: [
        'Prepare financial models for farm projects',
        'Analyze farm performance data and prepare reports',
        'Assist in budgeting and forecasting activities',
        'Monitor cash flow and financial metrics',
        'Support the preparation of investor financial reports',
        'Assist with financial due diligence for new projects',
        'Collaborate with farm managers on financial planning'
      ],
      requirements: [
        "Bachelor's degree in Finance, Accounting, or related field",
        '2-4 years of experience in financial analysis',
        'Strong financial modeling and analytical skills',
        'Proficiency in Excel and financial software',
        'Knowledge of agricultural economics is a plus',
        'Attention to detail and accuracy',
        'Good communication and reporting skills'
      ],
      benefits: [
        'Competitive salary package',
        'Performance bonuses',
        'Health insurance coverage',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Modern office environment',
        'Retirement benefits'
      ]
    },
    {
      id: 8,
      title: 'HR Specialist',
      location: 'Bangalore, Karnataka',
      department: 'hr',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'We are seeking an HR Specialist to support our growing team across multiple locations. The ideal candidate will help build and maintain a positive company culture while ensuring efficient HR operations.',
      responsibilities: [
        'Manage recruitment and onboarding processes',
        'Administer employee benefits and compensation',
        'Develop and implement HR policies and procedures',
        'Coordinate training and development programs',
        'Handle employee relations and engagement initiatives',
        'Maintain HR documentation and compliance',
        'Support performance management processes'
      ],
      requirements: [
        "Bachelor's degree in Human Resources, Business, or related field",
        '2-5 years of experience in HR roles',
        'Knowledge of HR best practices and employment laws',
        'Experience with HRIS and recruitment platforms',
        'Strong interpersonal and communication skills',
        'Problem-solving and conflict resolution abilities',
        'Discretion and confidentiality'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance coverage',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Modern office environment',
        'Team events and activities',
        'Retirement benefits'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = activeFilter === 'all' || job.department === activeFilter;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesSearch;
  });

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const openApplicationForm = (job: JobListing) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setApplicationSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files ? e.target.files[0] : null
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application data to your backend
    console.log('Application submitted:', { ...formData, jobId: selectedJob?.id });
    setApplicationSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {applicationSubmitted ? 'Application Submitted' : `Apply for ${selectedJob?.title}`}
              </h2>
              <button 
                onClick={closeApplicationForm}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              {applicationSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Application Submitted Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for applying for the {selectedJob?.title} position. Our HR team will review your application and contact you soon.
                  </p>
                  <button
                    onClick={closeApplicationForm}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-1">{selectedJob?.title}</h3>
                    <p className="text-gray-600 text-sm">{selectedJob?.location} • {selectedJob?.type}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV *
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        required
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Letter
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio/LinkedIn URL
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                        Referral Source
                      </label>
                      <input
                        type="text"
                        id="referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="How did you hear about us?"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={closeApplicationForm}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 mr-4 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-green-100">
              Build your career with us and make a difference in sustainable agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Join Maamara Farms</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're building the future of sustainable agriculture and farmland investment in India. Join us on this exciting journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-green-600 mb-4">
                <Leaf className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Meaningful Impact</h3>
              <p className="text-gray-600">
                Contribute to sustainable agriculture and help transform the farming sector in India.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-green-600 mb-4">
                <TrendingUp className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Develop your skills and advance your career in a rapidly growing organization.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-green-600 mb-4">
                <Users className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work with a diverse team of passionate professionals in an inclusive environment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-green-600 mb-4">
                <Heart className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Holistic Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive compensation, work-life balance, and comprehensive benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="relative flex-grow max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Search for jobs by title, location, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              {departments.map((department) => (
                <button
                  key={department.id}
                  onClick={() => setActiveFilter(department.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === department.id ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors`}
                >
                  {department.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Available
              </h3>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center text-gray-600 text-sm gap-x-4 gap-y-2 mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-400" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 md:min-w-[180px]">
                        <button
                          onClick={() => openApplicationForm(job)}
                          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
                        >
                          Apply Now
                        </button>
                        <button
                          onClick={() => toggleJobExpansion(job.id)}
                          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                          {expandedJob === job.id ? (
                            <>
                              <span>View Less</span>
                              <ChevronUp className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              <span>View Details</span>
                              <ChevronDown className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {expandedJob === job.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {job.benefits.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-500 mr-2">•</span>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                          <button
                            onClick={() => openApplicationForm(job)}
                            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <Send className="mr-2 h-5 w-5" />
                            Apply for This Position
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Briefcase className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or browse all departments</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View All Jobs
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recruitment Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've designed a straightforward process to help us find the right talent for our team
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:col-start-1">
                  <div className="md:pr-8 md:text-right">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Application Review</h3>
                      <p className="text-gray-600">
                        Our HR team carefully reviews all applications to identify candidates whose skills and experience match our requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center">
                  <div className="bg-green-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold shadow-md z-10">
                    1
                  </div>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:col-start-2">
                  <div className="md:pl-8">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Initial Interview</h3>
                      <p className="text-gray-600">
                        Shortlisted candidates are invited for an initial interview, which may be conducted virtually or in person, to assess qualifications and cultural fit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center">
                  <div className="bg-green-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold shadow-md z-10">
                    2
                  </div>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:col-start-1">
                  <div className="md:pr-8 md:text-right">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Technical Assessment</h3>
                      <p className="text-gray-600">
                        Depending on the role, candidates may be asked to complete a technical assessment, case study, or practical exercise to demonstrate their skills.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center">
                  <div className="bg-green-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold shadow-md z-10">
                    3
                  </div>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:col-start-2">
                  <div className="md:pl-8">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Final Interview</h3>
                      <p className="text-gray-600">
                        Final candidates meet with senior team members and potential colleagues to ensure mutual fit and alignment with our mission and values.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center">
                  <div className="bg-green-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold shadow-md z-10">
                    4
                  </div>
                </div>
              </div>
              
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:col-start-1">
                  <div className="md:pr-8 md:text-right">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Offer & Onboarding</h3>
                      <p className="text-gray-600">
                        Successful candidates receive an offer and, upon acceptance, begin our comprehensive onboarding program to set them up for success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center">
                  <div className="bg-green-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold shadow-md z-10">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Student Internship Program</h2>
              <p className="text-xl text-green-100 mb-6">
                Are you a student interested in agriculture, technology, or business? Join our internship program!
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gain hands-on experience in a fast-growing agritech company</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Work on meaningful projects with real-world impact</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Receive mentorship from industry professionals</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Potential for full-time opportunities after graduation</span>
                </li>
              </ul>
              <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium">
                <FileText className="mr-2 h-5 w-5" />
                Apply for Internship
              </button>
            </div>
            <div className="md:w-5/12">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Available Internship Areas</h3>
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Agricultural Research</h4>
                    <p className="text-sm text-green-100">Work with our agricultural scientists on crop research and sustainable farming practices.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Technology & Data Analytics</h4>
                    <p className="text-sm text-green-100">Help develop farm monitoring systems and analyze agricultural data for insights.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Marketing & Communications</h4>
                    <p className="text-sm text-green-100">Assist in creating content and campaigns to promote farmland investment opportunities.</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Business Development</h4>
                    <p className="text-sm text-green-100">Support our sales team in identifying new markets and investment opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our employees about their experience working at Maamara Farms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Rajesh Kumar</h3>
                <p className="text-green-600 text-sm mb-4">Senior Farm Manager • 4 years</p>
                <p className="text-gray-600 mb-4">
                  "Working at Maamara Farms has been incredibly rewarding. I've been able to apply my agricultural expertise while learning new sustainable farming techniques. The company truly values innovation and employee growth."
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Priya Sharma</h3>
                <p className="text-green-600 text-sm mb-4">Investment Advisor • 3 years</p>
                <p className="text-gray-600 mb-4">
                  "I joined Maamara Farms after working in traditional finance, and it's been an amazing journey. Helping investors understand the value of farmland while contributing to sustainable agriculture gives my work real purpose."
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Arjun Patel</h3>
                <p className="text-green-600 text-sm mb-4">AgriTech Developer • 2 years</p>
                <p className="text-gray-600 mb-4">
                  "The opportunity to build technology solutions that directly impact farming efficiency and sustainability is what drew me to Maamara Farms. The collaborative environment and challenging projects keep me engaged every day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Openings CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white rounded-xl shadow-md p-6 mb-8 mx-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Don't See a Suitable Position?</h2>
          <p className="text-gray-600 text-xl mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
            <Send className="mr-2 h-5 w-5" />
            Submit Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;