import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function ProjectsSection({ darkMode }) {
    const projects = [
        {
            title: "Kbid-App",
            description: "Capstone Project of Mobile Application for church",
            tech: ["Android Studio", "Java", "SQLite", "Firebase"],
            image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop",
            github: "https://github.com/blancaflor480/Kbid-App"
        },
        {
            title: "HOABILLINGSYSTEM",
            description: "SAAD & MOR Project for Homeowners Association Web Application System",
            tech: ["PHP", "HTML", "CSS", "Bootstrap"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            github: "https://github.com/blancaflor480/HOABILLINGSYSTEM"
        },
        {
            title: "NOXCLOTHING",
            description: "Web Development System Project for Ecommerce system online shop",
            tech: ["PHP", "HTML", "CSS", "Bootstrap"],
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
            github: "https://github.com/blancaflor480/NOXCLOTHING"
        },
        {
            title: "Data Entry",
            description: "System for Encoding data of employee",
            tech: ["React.js", "Express.js", "MySQL", "Firebase"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            github: "https://github.com/blancaflor480/DataEntry"
        },
        {
            title: "Asset Inventory",
            description: "System for IT Inventory system management",
            tech: ["Vue.js", "TypeScript", "MySQL"],
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
            github: "https://github.com/blancaflor480/asset-inventory"
        }
    ];

    return (
        <section 
            id="projects" 
            className={`py-24 lg:py-32 relative overflow-hidden ${
                darkMode 
                    ? 'bg-[#1a1a1a]' 
                    : 'bg-gradient-to-b from-blue-50/50 via-white to-white'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                            darkMode 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'bg-blue-100 text-blue-600'
                        }`}
                    >
                        Portfolio
                    </motion.span>
                    <h2 
                        className={`text-4xl md:text-5xl font-bold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        My{' '}
                        <span className={`${
                            darkMode 
                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'
                        }`}>
                            Projects
                        </span>
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`group rounded-2xl overflow-hidden transition-all duration-500 ${
                                darkMode 
                                    ? 'bg-[#252525] hover:shadow-2xl hover:shadow-blue-500/10 border border-white/5' 
                                    : 'bg-white hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-100'
                            }`}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-48">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className={`absolute inset-0 transition-opacity duration-300 ${
                                    darkMode 
                                        ? 'bg-gradient-to-t from-[#252525] via-transparent to-transparent opacity-60 group-hover:opacity-80' 
                                        : 'bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-60'
                                }`} />
                                
                                {/* Floating Icon */}
                                <div className={`absolute top-4 right-4 p-3 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 ${
                                    darkMode 
                                        ? 'bg-blue-500/80 text-white' 
                                        : 'bg-white/90 text-blue-600 shadow-lg'
                                }`}>
                                    <Folder size={20} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 
                                    className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                                        darkMode 
                                            ? 'text-white group-hover:text-blue-400' 
                                            : 'text-gray-900 group-hover:text-blue-600'
                                    }`}
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {project.title}
                                </h3>
                                <p 
                                    className={`mb-5 text-sm leading-relaxed ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                                >
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-300 ${
                                                darkMode 
                                                    ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' 
                                                    : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* GitHub Link */}
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        darkMode 
                                            ? 'bg-white/10 text-white hover:bg-white/20' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <Github size={16} />
                                    View on GitHub
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}