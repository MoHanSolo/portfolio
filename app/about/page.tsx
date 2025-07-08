import Image from 'next/image';

export const metadata = {
    title:          'About - Brendan Mohan',
    description:    'Learn about my background and skills',
}

export default function AboutPage() {
    return (
        <section className="max-w-3xl mx-auto space-y-8 px-4 py-12">
            {/* Page title */}
            <h1 className="text-4xl font-bold text-center">About Me</h1>

            {/* Flex container: image + content */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Headshot */}
                <div className="relative w-32 h-40 rounded-[2rem] overflow-hidden">
                    <Image
                        src="/og-image.jpg"
                        width={600}
                        height={600}
                        alt="Brendan Mohan headshot"
                        className="rounded-full object-cover"
                    />
                    </div>


                {/* Greeting + Bio */}
                <div className="space-y-4 text-gray-200">
                    <h2 className="text-2xl font-semibold">Hi, nice to meet you!</h2>

                    <p>
                        My name is Brendan Mohan and I'm a full-stack developer who loves building perfomant, accessible web apps using Next.js, React, and Tailwind.
                    </p>
                    <p>
                        I’m a full-stack web developer who loves turning business goals into clean, high-performing Shopify experiences. My career began in market research—sourcing and validating C-suite contacts for Alexander Group via Mack & Associates—which sharpened my eye for data accuracy, process automation (Excel macros, PitchBook), and client collaboration. After completing <a href="https://generalassemb.ly/students/courses/software-engineering-bootcamp" target="_blank" rel="noopener">General Assembly</a>’s full-stack engineering bootcamp, I joined <a href="https://www.dekstech.com" target="_blank" rel="noopener">DeksTech</a>, where I’ve built custom Liquid/CSS/JavaScript solutions, state-by-state shipping calculators, QuickBooks and Zapier integrations, and performance optimizations. Now, I’m eager to bring my blend of research rigor, client-first communication, and practical engineering chops to a full-time web-development role at an agency or in-house team. 
                    </p>
                </div>
            </div>
        </section>
    )
}