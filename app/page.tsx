import Image from "next/image";

export const metadata = {
  title: 'Brendan Mohan - Full Stack Developer',
  description: 'Hi! My name is Brendan Mohan, a MERN-stack developer'
}

export default function HomePage() {
  return (
    <section className="text-center flex flex-col items-center justify-center min-h-screen p-8">
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden">
        <Image
          src="/og-image.jpg"
          alt="Brendan Mohan"
          fill
          className="object-cover"
          />
      </div>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Brendan Mohan</h1>
      <p className="text-xl text-gray-600 mb-8">
        I build full-stack applications, like this one, with Next.js, React, and Tailwind CSS!
      </p>
      <div className="space-x-4">
        <a
          href="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          About Me
        </a>
        <a 
          href="/projects"
          className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            My Work
          </a>
      </div>
    </section>
  )
}
