"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/manblbpd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
  <div className="max-w-md mx-auto pt-8 sm:pt-16 px-4">
    <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center" 
        style={{ 
          fontFamily: 'Bitcount, Arial, Helvetica, sans-serif',
          color: '#00ff41',
          textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41',
          letterSpacing: '1px sm:2px'
        }}>
      Get In Touch
    </h2>
    
    {isSubmitted ? (
      <div className="text-center p-4 sm:p-8 bg-green-900 rounded-lg border border-green-600">
        <h3 className="text-xl sm:text-2xl text-green-400 mb-2" 
            style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
          Message Sent Successfully! ✓
        </h3>
        <p className="text-gray-300 mb-4 text-sm sm:text-base">
          Thanks for reaching out! I'll get back to you as soon as possible.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}
        >
          Send Another Message
        </button>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-green-500 text-sm sm:text-base"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-green-500 text-sm sm:text-base"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:border-green-500 text-sm sm:text-base"
          ></textarea>
        </div>
        
        {error && (
          <div className="text-red-400 text-sm">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    )}
  </div>
  )
};