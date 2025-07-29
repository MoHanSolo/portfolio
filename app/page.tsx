import Image from "next/image";
import PongPreview from "../components/pong-preview";
import Pong from "../components/pong";

export const metadata = {
  title: 'Brendan Mohan - Full Stack Developer',
  description: 'Hi! My name is Brendan Mohan, a MERN-stack developer'
}

export default function HomePage() {
  return (
    <>
      <section className="text-center min-h-screen p-8">
        <h1 className="text-5xl" style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
          Hi, I'm Brendan Mohan
        </h1>
        <p className="text-xl text-gray-600 mb-8" 
            style={{ 
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif',
              color: 'white'
              }}>
          I build full-stack applications, like this one, with Next.js, React, and Tailwind CSS!
        </p>
        <Pong />

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="/about"
            className="px-6 py-3 text-white rounded-lg hover:bg-green-700 transition"
            style={{ 
              backgroundColor: "#016630",
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
            }}
          >
            About Me
          </a>
          <a
            href="/my-work"
            className="px-6 py-3 text-white rounded-lg hover:bg-green-700 transition"
            style={{ 
              backgroundColor: "#016630",
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
            }}
          >
            My Work
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto mt-12">
          <h2 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
            Get In Touch
          </h2>
          <form action="mailto:your-email@example.com" method="post" encType="text/plain" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-green-500 focus:outline-none"
              style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-green-500 focus:outline-none"
              style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-green-500 focus:outline-none resize-none"
              style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white rounded-lg hover:bg-green-700 transition"
              style={{ 
                backgroundColor: "#016630",
                fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}