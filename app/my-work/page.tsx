export const metadata = {
    title: 'My-Work - Brendan Mohan',
    description: 'Portfolio of my work and projects',
}

export default function MyWorkPage() {
    const shopifyProjects = [
        {
        title: "AO Coolers Theme Customization",
        description: "Customized an existing Shopify theme by implementing a dynamic 'Made in USA' badge system controlled by product metafields. Store owners can now selectively enable/disable badges on specific products through the Shopify admin interface.",
        tech: ["Liquid", "JavaScript", "CSS3", "Shopify CLI", "Shopify Metafields", "Theme Customization"],
        type: "Professional Work", 
        impact: "Enhanced product marketing and brand messaging capabilities",
        githubUrl: "https://github.com/MoHanSolo/ao-coolers-theme",
        liveUrl: "https://aocoolers.com/collections/usa-made"
        },
        {
            title: "Inventory Management App",
            description: "Developed a Shopify app for automated inventory tracking and low-stock alerts using Shopify Admin API and webhooks.",
            tech: ["Node.js", "Shopify API", "React", "MongoDB"],
            type: "Professional Work",
            impact: "Reduced manual inventory work by 80%"
        }
    ];

    const personalProjects = [
        {
            title: "Interactive Pong Game",
            description: "Built this portfolio site featuring a playable Pong game using HTML5 Canvas and React hooks. Demonstrates modern web development skills.",
            tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            liveUrl: "/",
            githubUrl: "https://github.com/yourusername/portfolio",
            type: "Personal Project"
        },
        {
            title: "Task Management API",
            description: "RESTful API with user authentication, real-time updates, and comprehensive testing. Exploring backend development beyond e-commerce.",
            tech: ["Express.js", "PostgreSQL", "Socket.io", "Jest"],
            githubUrl: "https://github.com/yourusername/task-api",
            type: "Personal Project"
        }
    ];

    return (
        <section className="max-w-5xl mx-auto space-y-12 px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-white"
                style={{
                    fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
                }}>
                My Work
            </h1>

            {/* Professional Summary */}
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-300 mb-6"
                   style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                    Shopify developer with expertise in custom themes, apps, and e-commerce solutions. 
                    Passionate about expanding into full-stack development and exploring new technologies.
                </p>
                <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg mb-8"
                     style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                    🚀 Open to new opportunities beyond Shopify
                </div>
            </div>

            {/* Shopify Expertise Section */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-6 text-center"
                    style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                    🛒 Shopify Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {shopifyProjects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-500 relative">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-white"
                                    style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                    {project.title}
                                </h3>
                                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded"
                                      style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                    {project.type}
                                </span>
                            </div>
                            
                            <p className="text-gray-300 mb-3"
                               style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                {project.description}
                            </p>

                            {project.impact && (
                                <div className="bg-green-900 bg-opacity-50 p-3 rounded mb-4">
                                    <span className="text-green-300 font-semibold"
                                          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        📈 Impact: {project.impact}
                                    </span>
                                </div>
                            )}
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} 
                                          className="px-3 py-1 bg-green-600 text-white text-sm rounded-full"
                                          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex space-x-4">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} 
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                       style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="px-4 py-2 border border-gray-500 text-gray-300 rounded hover:bg-gray-600 transition"
                                       style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        GitHub
                                    </a>
                                )}
                            </div>

                            {/* Coming Soon Overlay */}
                            {index !== 0 && (
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🚧</div>
                                    <div className="text-xl font-bold text-white mb-2"
                                         style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        Coming Soon
                                    </div>
                                    <div className="text-sm text-gray-300"
                                         style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        Project details in progress
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Personal Projects Section */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-6 text-center"
                    style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                    💡 Personal Projects & Exploration
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {personalProjects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500 relative">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-white"
                                    style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                    {project.title}
                                </h3>
                                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded"
                                      style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                    {project.type}
                                </span>
                            </div>
                            
                            <p className="text-gray-300 mb-4"
                               style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} 
                                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                                          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex space-x-4">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} 
                                       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                       style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="px-4 py-2 border border-gray-500 text-gray-300 rounded hover:bg-gray-600 transition"
                                       style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        GitHub
                                    </a>
                                )}
                            </div>

                            {/* Coming Soon Overlay */}
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🚧</div>
                                    <div className="text-xl font-bold text-white mb-2"
                                         style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        Coming Soon
                                    </div>
                                    <div className="text-sm text-gray-300"
                                         style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                                        Project details in progress
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4"
                    style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                    Ready for New Challenges
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto"
                   style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                    While I excel at Shopify development, I'm actively expanding my skills in full-stack development, 
                    modern frameworks, and exploring opportunities beyond e-commerce. Let's build something amazing together!
                </p>
                <div className="flex justify-center space-x-4 flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded"
                          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                        React/Next.js
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded"
                          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                        Node.js
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded"
                          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                        TypeScript
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded"
                          style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
                        PostgreSQL
                    </span>
                </div>
            </div>

            {/* Home Button */}
            <div className="text-center">
                <a
                    href="/"
                    className="inline-block px-6 py-3 text-white rounded-lg hover:bg-green-700 transition"
                    style={{
                        backgroundColor: "#016630",
                        fontFamily: 'Bitcount, Arial, Helvetica, sans-serif'
                    }}
                >
                    ← Back to Home
                </a>
            </div>
        </section>
    );
}