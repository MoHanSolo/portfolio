import Image from "next/image";
import PongPreview from "../components/pong-preview";
import Pong from "../components/pong";
import ContactForm from "../components/contact-form";

export const metadata = {
  title: 'Brendan Mohan - Full Stack Developer',
  description: 'Hi! My name is Brendan Mohan, a MERN-stack developer'
}

export default function HomePage() {
  return (
    <>
      <section className="text-center min-h-screen p-4 sm:p-8">
        {/* Main heading - responsive text sizes */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4" 
            style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
          Hi, I'm Brendan Mohan
        </h1>
        
        {/* Subtitle - responsive text and spacing */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4" 
            style={{ 
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif',
              color: 'white'
              }}>
          I build full-stack applications, like this one, with Next.js, React, and Tailwind CSS!
        </p>
        
        <Pong />

        {/* Instructions - smaller on mobile */}
        <p className="text-base sm:text-lg text-gray-400 mt-4 px-4" 
           style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
            Use the arrow keys to move the paddle and hit the ball!
        </p>

        {/* Navigation Buttons - stack on mobile */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8 px-4">
          <a
            href="/about"
            className="px-6 py-3 text-white rounded-lg hover:bg-green-700 transition text-center"
            style={{
              backgroundColor: "#016630",
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
            }}
          >
            About Me
          </a>
          <a
            href="/work"
            className="px-6 py-3 text-white rounded-lg hover:bg-green-700 transition text-center"
            style={{
              backgroundColor: "#016630",
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
            }}
          >
            My Work
          </a>
        </div>

        <ContactForm />
      </section>
    </>
  );
}