import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, ArrowRight, Zap, Users, Shield, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: Zap, title: 'Lightning-Fast Analytics', description: 'Process billions of data points in seconds' },
    { icon: Users, title: 'Team Collaboration', description: 'Seamless sharing and real-time updates' },
    { icon: Shield, title: 'Enterprise-Grade Security', description: 'Your data is protected with military-grade encryption' },
    { icon: Sparkles, title: 'AI-Powered Insights', description: 'Uncover hidden patterns and predict trends' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden perspective-1000">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 animate-float leading-tight">
              Revolutionize Your Business <br className="hidden md:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-gradient">
                with AI-Powered Insights
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-10 animate-fade-in-delay-1 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to drive growth, optimize operations, and stay light-years ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <button className="btn btn-primary animate-pulse-slow">
                Start Your Free Trial <ChevronRight className="ml-2" />
              </button>
              <button className="btn btn-secondary">
                Watch Demo <Play className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-opacity-30 border-t-8 border-l-8 border-white rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 border-4 border-opacity-30 border-t-8 border-r-8 border-white rounded-full animate-spin-slow animate-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 animate-pulse-slow rounded-full scale-150"></div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-600 animate-bounce-slow">Unlock the Power of AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer feature-card ${
                  activeFeature === index ? 'bg-indigo-100' : 'bg-gray-50 hover:bg-indigo-50'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <feature.icon className={`mb-6 mx-auto transition-all duration-300 ${activeFeature === index ? 'text-indigo-600 animate-bounce' : 'text-indigo-400'}`} size={48} />
                <h3 className="text-2xl font-semibold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
                <div className={`mt-6 h-2 bg-indigo-600 rounded-full transition-all duration-300 ${activeFeature === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-pulse-slow">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: 'John Doe', role: 'CTO, Tech Innovators Inc.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', quote: 'This AI solution has revolutionized our decision-making process, leading to a 40% increase in operational efficiency.' },
              { name: 'Jane Smith', role: 'CEO, Global Enterprises', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', quote: "We've seen a 200% increase in customer satisfaction and retention rates since implementing this AI platform." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-indigo-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center space-x-12">
            {['Google', 'IBM', 'Microsoft', 'Amazon'].map((company) => (
              <img
                key={company}
                src={`https://logo.clearbit.com/${company.toLowerCase()}.com`}
                alt={`${company} Logo`}
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-pulse-slow">Experience AI-Driven Transformation</h2>
          <div className="aspect-w-16 aspect-h-9 mb-12 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
            {isVideoLoaded ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lkkGlVWvkLk"
                title="Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full bg-indigo-700 flex items-center justify-center">
                <Play className="text-white animate-pulse" size={64} />
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { title: 'Real-time Analysis', description: 'Process data instantly for immediate, actionable insights' },
              { title: 'Customizable Dashboards', description: 'Tailor your view to focus on metrics that drive your business' },
              { title: 'Seamless Integration', description: 'Effortlessly connects with your existing tools and systems' },
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white text-indigo-900 p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-3">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-indigo-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-pulse-slow">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10">Sign up now and get a 30-day free trial. No credit card required.</p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-3 px-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-indigo-900 font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 animate-bounce-slow"
              >
                Start Free Trial <ArrowRight className="ml-2" />
              </button>
            </div>
          </form>
          <p className="mt-6 text-sm text-yellow-100">By signing up, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">AI Solutions Inc.</h3>
            <p className="text-indigo-300">Empowering businesses with intelligent solutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Product', 'Company', 'Legal'].map((category) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {['Features', 'Pricing', 'Case Studies'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-indigo-300 hover:text-white transition-all duration-300 hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300">
          <p>&copy; 2024 AI Solutions Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;