import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, GitBranch, Search, FileCode, Smartphone, Globe, Figma, Image, PenTool, Database, Coffee, FileType, Send, Github, Zap, BarChart3, LineChart, SearchCheck } from 'lucide-react';

export default function SkillsSection({ darkMode }) {
    const skillCategories = [
        {
            icon: Code,
            title: "Front End",
            skills: [
                { name: "HTML5 & CSS", icon: FileCode },
                { name: "JavaScript", icon: FileType },
                { name: "React.Js", icon: Smartphone },
                { name: "WordPress", icon: Globe }
            ]
        },
        {
            icon: Palette,
            title: "Design & UI/UX",
            skills: [
                { name: "Figma", icon: Figma },
                { name: "Photoshop", icon: Image },
                { name: "Canva", icon: PenTool }
            ]
        },
        {
            icon: Server,
            title: "Back End",
            skills: [
                { name: "PHP", icon: Database },
                { name: "Java", icon: Coffee },
                { name: "TypeScript", icon: FileType }
            ]
        },
        {
            icon: GitBranch,
            title: "Development Workflow",
            skills: [
                { name: "Postman API", icon: Send },
                { name: "Git/GitHub", icon: Github },
                { name: "GoHighLevel", icon: BarChart3 },
                { name: "Zapier", icon: Zap }
            ]
        },
        {
            icon: Search,
            title: "SEO (Search Engine Optimization)",
            skills: [
                { name: "Yoast SEO", icon: SearchCheck },
                { name: "Google Console", icon: LineChart },
                { name: "Google Analytics", icon: BarChart3 }
            ]
        }
    ];

    return (
        <section 
            id="skills" 
            className={`py-24 lg:py-32 relative overflow-hidden ${
                darkMode 
                    ? 'bg-[#252525]' 
                    : 'bg-gradient-to-b from-white to-blue-50/50'
            }`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className={`absolute -top-40 -left-40 w-80 h-80 rounded-full border ${
                        darkMode ? 'border-white/5' : 'border-blue-200/50'
                    }`}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full border ${
                        darkMode ? 'border-white/5' : 'border-blue-200/50'
                    }`}
                />
            </div>

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
                        My Expertise
                    </motion.span>
                    <h2 
                        className={`text-4xl md:text-5xl font-bold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Skills &{' '}
                        <span className={`${
                            darkMode 
                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'
                        }`}>
                            Technologies
                        </span>
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`group relative p-8 rounded-2xl transition-all duration-500 ${
                                darkMode 
                                    ? 'bg-[#1a1a1a] hover:bg-[#1f1f1f] border border-white/5 hover:border-blue-500/30' 
                                    : 'bg-white hover:shadow-2xl hover:shadow-blue-500/15 border border-gray-100'
                            }`}
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                darkMode 
                                    ? 'bg-gradient-to-br from-blue-600/10 to-transparent' 
                                    : 'bg-gradient-to-br from-blue-50/50 to-transparent'
                            }`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                                    darkMode 
                                        ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' 
                                        : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 group-hover:text-white'
                                }`}>
                                    <category.icon size={28} />
                                </div>

                                {/* Title */}
                                <h3 
                                    className={`text-xl font-semibold mb-6 ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {category.title}
                                </h3>

                                {/* Skills List */}
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                darkMode 
                                                    ? 'bg-blue-500/10 text-blue-400' 
                                                    : 'bg-blue-50 text-blue-600'
                                            }`}>
                                                <skill.icon size={16} />
                                            </div>
                                            <span 
                                                className={`font-medium ${
                                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                                }`}
                                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                                            >
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}