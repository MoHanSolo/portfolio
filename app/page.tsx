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
      {/* <div className="absolute top-25 left-25 w-32 h-32 rounded-full overflow-hidden">
        <Image
          src="/og-image.jpg"
          alt="Brendan Mohan"
          width={160}
          height={160}
          className="object-cover rounded-full mb-6"
          style={{ objectPosition: '50% 30%' }}
        />
      </div> */}
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
        <div className="space-x-4">
          <a
            href="/about"
            className="px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition"
            style={{ 
              backgroundColor: "#016630",
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
            }}
          >
            About Me
          </a>
          <a
            href="/projects"
            className="px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition"
            style={{ 
              backgroundColor: "#016630",
              fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
            }}
          >
            My Work
          </a>
        </div>
      </section>
    </>
  );
}