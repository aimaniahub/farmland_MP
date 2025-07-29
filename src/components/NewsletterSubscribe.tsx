import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

interface NewsletterSubscribeProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
  onSubscribe?: (email: string) => void;
}

const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({
  title = 'Subscribe to Our Newsletter',
  subtitle = 'Stay updated with our latest farm projects and agricultural insights.',
  buttonText = 'Subscribe',
  placeholder = 'Your email address',
  className = '',
  onSubscribe,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError(null);
    setSuccess(false);
    
    // Validate email
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubscribe) {
        onSubscribe(email);
      }
      
      setSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${className}`}>
      <div className="text-center mb-6">
        {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder={placeholder}
            className={`w-full px-4 py-3 pr-36 rounded-lg border ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary-200'} focus:outline-none focus:ring-2 transition-colors`}
            disabled={loading || success}
          />
          <button
            type="submit"
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-md font-medium transition-colors ${loading || success ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'} text-white`}
            disabled={loading || success}
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading
              </span>
            ) : success ? (
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Subscribed
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="h-4 w-4 mr-1" />
                {buttonText}
              </span>
            )}
          </button>
        </div>
        
        {error && (
          <div className="mt-2 text-red-600 text-sm flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}
        
        {success && (
          <div className="mt-2 text-green-600 text-sm flex items-center">
            <CheckCircle className="h-4 w-4 mr-1" />
            Thank you for subscribing! You'll receive our updates soon.
          </div>
        )}
        
        <p className="mt-3 text-xs text-gray-500 text-center">
          By subscribing, you agree to our <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and consent to receive updates from our company.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSubscribe;