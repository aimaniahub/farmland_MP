import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SocialShare from '../components/SocialShare';
import AnimatedSection from '../components/AnimatedSection';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  authorImage?: string;
  authorBio?: string;
}

// Sample blog posts data (in a real app, this would come from an API)
const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Crops for Profitable Farming in 2023',
    excerpt: 'Discover the most profitable crops to grow this year based on market trends and climate conditions.',
    content: `
      <p>Farming has always been the backbone of our economy, providing sustenance and livelihood to millions. As we move further into 2023, it's crucial for farmers and agricultural investors to understand which crops offer the best return on investment.</p>
      
      <h2>1. Organic Vegetables</h2>
      <p>The demand for organic produce continues to rise as more consumers become health-conscious. Organic vegetables command premium prices in the market, making them a lucrative option for farmers with the right certification.</p>
      
      <h2>2. Medicinal Herbs</h2>
      <p>With the growing interest in alternative medicine and natural remedies, medicinal herbs like turmeric, ashwagandha, and holy basil are seeing unprecedented demand both domestically and internationally.</p>
      
      <h2>3. Exotic Fruits</h2>
      <p>Fruits like dragon fruit, rambutan, and passion fruit are gaining popularity in urban markets. These exotic varieties fetch higher prices and can be grown in controlled environments.</p>
      
      <h2>4. Pulses and Legumes</h2>
      <p>As plant-based diets become more common, the demand for protein-rich pulses and legumes has increased significantly. These crops also help in nitrogen fixation, improving soil health.</p>
      
      <h2>5. Mushrooms</h2>
      <p>Mushroom cultivation requires minimal land and can be done indoors, making it ideal for farmers with limited space. Varieties like shiitake and oyster mushrooms are particularly profitable.</p>
      
      <p>The key to successful farming in 2023 is diversification and staying attuned to market trends. By choosing the right crops and implementing efficient farming practices, farmers can maximize their profits while contributing to sustainable agriculture.</p>
    `,
    author: 'Rajesh Kumar',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    authorBio: 'Rajesh Kumar is an agricultural scientist with over 15 years of experience in crop research and farm management. He specializes in sustainable farming practices and crop optimization.',
    date: 'June 15, 2023',
    category: 'farming-tips',
    tags: ['crops', 'profitability', 'market-trends'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'How Farm Plot Investment Changed My Retirement Plans',
    excerpt: 'A personal story of how investing in farmland provided financial security and peace of mind.',
    content: `
      <p>Five years ago, I was like most corporate professionals in their 50s – worried about retirement and unsure if my savings would be enough. Traditional investment options seemed either too risky or offered minimal returns. That's when I stumbled upon the concept of farmland investment.</p>
      
      <h2>The Initial Hesitation</h2>
      <p>I'll be honest – I was skeptical at first. Farming seemed like a world away from my experience in IT management. Questions flooded my mind: How would I manage a farm? What if crops failed? Was this just another investment fad?</p>
      
      <h2>Finding the Right Partner</h2>
      <p>The turning point came when I discovered managed farmland plots. These offered the perfect balance – ownership of agricultural land with professional management handling the actual farming operations. After thorough research, I invested in a 1-acre plot in a managed mango orchard.</p>
      
      <h2>Steady Returns and Tax Benefits</h2>
      <p>Over the past five years, my farmland investment has provided an average annual return of 12% – significantly outperforming my mutual fund investments. Additionally, the tax benefits associated with agricultural income have been substantial.</p>
      
      <h2>Beyond Financial Returns</h2>
      <p>What I didn't anticipate was the joy of watching something grow – literally. Quarterly visits to my plot have become a ritual I look forward to. There's something profoundly satisfying about seeing the trees you own bear fruit and knowing you're contributing to food production.</p>
      
      <p>Today, at 60, I'm more confident about my retirement than ever before. My farmland investment has not only provided financial security but also a connection to the land that I never knew I needed. For professionals looking to diversify their retirement portfolio, I cannot recommend farmland investment enough.</p>
    `,
    author: 'Priya Sharma',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    authorBio: 'Priya Sharma is a retired IT professional who now spends her time managing her farm investments and advocating for sustainable agriculture. She regularly speaks at investment seminars about alternative retirement planning.',
    date: 'May 22, 2023',
    category: 'success-stories',
    tags: ['investment', 'retirement', 'personal-story'],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Sustainable Farming Practices for Small Plot Owners',
    excerpt: 'Learn how to implement eco-friendly farming techniques that improve soil health and crop yield.',
    content: `
      <p>Sustainable farming isn't just for large agricultural operations. As a small plot owner, you have the unique opportunity to implement eco-friendly practices that can significantly impact both your yield and the environment.</p>
      
      <h2>Composting: Nature's Recycling System</h2>
      <p>Creating your own compost is perhaps the most fundamental sustainable practice. Kitchen scraps, yard waste, and even paper products can be transformed into nutrient-rich soil amendments. A well-maintained compost pile can reduce or eliminate the need for chemical fertilizers.</p>
      
      <h2>Water Conservation Techniques</h2>
      <p>Drip irrigation systems deliver water directly to plant roots, minimizing evaporation and runoff. Rainwater harvesting systems can capture and store rainwater for use during dry periods. These methods not only conserve water but can also reduce your operational costs.</p>
      
      <h2>Companion Planting</h2>
      <p>Certain plants benefit each other when grown together. For example, planting basil near tomatoes can improve the flavor of the tomatoes and repel certain pests. Marigolds are known to deter nematodes and other harmful soil organisms. Strategic companion planting can reduce the need for pesticides.</p>
      
      <h2>Cover Crops and Crop Rotation</h2>
      <p>Planting cover crops during off-seasons prevents soil erosion and adds organic matter to the soil. Rotating crops helps break pest cycles and prevents soil nutrient depletion. Both practices contribute to long-term soil health.</p>
      
      <p>Implementing these sustainable practices may require some initial investment of time and resources, but the long-term benefits are substantial. Healthier soil leads to more resilient plants, which in turn produce higher yields. Moreover, you'll have the satisfaction of knowing that your farming practices are contributing to, rather than detracting from, environmental health.</p>
    `,
    author: 'Arun Patel',
    authorImage: 'https://randomuser.me/api/portraits/men/67.jpg',
    authorBio: 'Arun Patel is an environmental scientist and small-scale farmer who has been practicing and teaching sustainable agriculture for over a decade. He runs workshops on eco-friendly farming techniques throughout India.',
    date: 'April 10, 2023',
    category: 'sustainability',
    tags: ['sustainable', 'eco-friendly', 'soil-health'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '6 min read',
  },
];

// Function to find related posts based on category and tags
const findRelatedPosts = (currentPost: BlogPost, allPosts: BlogPost[], limit: number = 3): BlogPost[] => {
  return allPosts
    .filter(post => post.id !== currentPost.id) // Exclude current post
    .sort((a, b) => {
      // Calculate relevance score based on matching category and tags
      const aScore = (a.category === currentPost.category ? 2 : 0) + 
                    a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bScore = (b.category === currentPost.category ? 2 : 0) + 
                    b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bScore - aScore; // Sort by highest relevance first
    })
    .slice(0, limit); // Take only the specified number of posts
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API fetch with setTimeout
    setIsLoading(true);
    setTimeout(() => {
      const foundPost = SAMPLE_BLOG_POSTS.find(post => post.id === id);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(findRelatedPosts(foundPost, SAMPLE_BLOG_POSTS));
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
          <div className="h-96 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${post.image})`,
            opacity: 0.3
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center text-white opacity-90 text-sm md:text-base">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' }, 
            { label: 'Blog', path: '/blog' },
            { label: post.title, path: `/blog/${post.id}` }
          ]} 
          showHomeIcon 
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fade-in" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div 
                  className="prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>

                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{post.author}</h3>
                      <p className="text-gray-600 text-sm">{post.authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Share this article:</h3>
                  <SocialShare 
                    url={window.location.href} 
                    title={post.title} 
                    description={post.excerpt} 
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex items-start">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-20 h-20 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800 hover:text-green-600 transition-colors">
                          <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {['farming-tips', 'investment', 'sustainability', 'success-stories'].map(category => (
                    <li key={category}>
                      <Link 
                        to={`/blog?category=${category}`}
                        className="flex items-center justify-between text-gray-700 hover:text-green-600 transition-colors"
                      >
                        <span className="capitalize">{category.replace('-', ' ')}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                          {SAMPLE_BLOG_POSTS.filter(p => p.category === category).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">Get the latest farming tips and investment advice delivered to your inbox.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;