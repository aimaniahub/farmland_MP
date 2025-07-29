import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    reason: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        reason: 'general'
      });
      setSubmitted(false);
    }, 3000);
  };

  const officeLocations = [
    {
      name: 'Bangalore Headquarters',
      address: '123 Brigade Road, Bangalore, Karnataka 560001',
      phone: '+91 80 1234 5678',
      email: 'bangalore@maamarafarms.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      name: 'Mumbai Office',
      address: '456 Marine Drive, Mumbai, Maharashtra 400002',
      phone: '+91 22 9876 5432',
      email: 'mumbai@maamarafarms.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      name: 'Delhi Office',
      address: '789 Connaught Place, New Delhi 110001',
      phone: '+91 11 2345 6789',
      email: 'delhi@maamarafarms.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-green-100">
              We're here to help with any questions about our farmland projects
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{office.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-green-600 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3" />
                    <span>General Inquiries</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3" />
                    <span>Investment Opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>Schedule a Site Visit</span>
                  </div>
                </div>
                <div className="mt-12">
                  <p className="text-sm text-green-200">
                    We aim to respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Send us a message</h3>
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                          Reason for Contact
                        </label>
                        <select
                          id="reason"
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="investment">Investment Opportunity</option>
                          <option value="visit">Schedule a Site Visit</option>
                          <option value="complaint">Complaint</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Locations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our offices are conveniently located in major cities across India. Feel free to visit us during business hours.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
            {/* This would be replaced with an actual map component */}
            <div className="h-full w-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600 font-medium">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers to common questions about contacting us
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What are your office hours?</h3>
              <p className="text-gray-600">Our offices are open Monday through Friday from 9:00 AM to 6:00 PM local time. We are closed on weekends and public holidays.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our office directly.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I schedule a site visit to see the farms?</h3>
              <p className="text-gray-600">Yes, we offer guided tours of our farm projects. You can request a site visit through our contact form or by calling our office. Tours are typically conducted on weekends.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I reach your customer support team?</h3>
              <p className="text-gray-600">Our customer support team can be reached via email at support@maamarafarms.com or by phone at +91 80 1234 5678 during business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;