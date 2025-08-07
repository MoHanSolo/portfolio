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

        {/* Pong Instructions */}
        <p className="text-lg text-gray-400 mt-4" style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
            Use the arrow keys to move the paddle and hit the ball!
        </p>

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

        <ContactForm />
      </section>
    </>
  );
}