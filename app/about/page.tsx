import Image from 'next/image';

export const metadata = {
    title:          'About - Brendan Mohan',
    description:    'Learn about my background and skills',
}

export default function AboutPage() {
    return (
        <section className="max-w-3xl mx-auto space-y-6 sm:space-y-8 px-4 py-8 sm:py-12">
            {/* Page title - responsive size */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center" 
                style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                About Me
            </h1>

            {/* Flex container: responsive layout */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                {/* Headshot - consistent sizing */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden">
                    <Image
                        src="/og-image.jpg"
                        alt="Brendan Mohan headshot"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Greeting + Bio - responsive text */}
                <div className="space-y-4 text-center sm:text-left text-gray-200 flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold" 
                        style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                        Hi, nice to meet you!
                    </h2>
                    <p className="text-lg sm:text-xl">
                        My name is Brendan Mohan and I'm a full-stack developer who loves building performant, accessible web apps using Next.js, React, and Tailwind.
                    </p>

                    <p className="text-lg sm:text-xl">
                        I'm a full-stack web developer who loves turning business goals into clean, high-performing Shopify experiences...
                    </p>
                </div>
            </div>

            {/* Go Home Button - responsive sizing */}
            <div className="flex justify-center pt-4 sm:pt-8">
                <a
                    href="/"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
                    style={{
                        backgroundColor: "#016630",
                        fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
                    }}
                >
                    ← Back to Home
                </a>
            </div>
        </section>
    )
}