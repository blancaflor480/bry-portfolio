import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, TrendingUp, BookOpen, Download, ArrowRight } from 'lucide-react';
import personalImage from '../../Images/Personal image.jpg';

export default function AboutSection({ darkMode }) {
    const coreValues = [
        {
            icon: Shield,
            title: "Security-First Mindset",
            description: "I prioritize security in every project, ensuring data protection, system integrity, and user privacy are always maintained."
        },
        {
            icon: Target,
            title: "Purpose-Driven Development",
            description: "I create solutions, not just websites—every project is designed to deliver real value and meaningful results."
        },
        {
            icon: TrendingUp,
            title: "Results-Oriented Marketing",
            description: "I combine technical skills with marketing strategies to produce digital experiences that engage users and drive measurable results."
        },
        {
            icon: BookOpen,
            title: "Continuous Learning & Adaptability",
            description: "I stay updated with emerging technologies and security practices, adapting quickly to deliver innovative and reliable solutions."
        }
    ];

    return (
        <section 
            id="about" 
            className={`py-24 lg:py-32 relative overflow-hidden ${
                darkMode 
                    ? 'bg-[#1a1a1a]' 
                    : 'bg-gradient-to-b from-white via-blue-50/30 to-white'
            }`}
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-0 right-0 w-1/2 h-1/2 ${
                    darkMode ? 'bg-blue-600/5' : 'bg-blue-100/50'
                } rounded-full blur-3xl -translate-y-1/2 translate-x-1/4`} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Main About Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group max-w-md mx-auto lg:mx-0"
                    >
                        {/* Glowing Background Effect */}
                        <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse ${
                            darkMode
                                ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600'
                                : 'bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400'
                        }`} />

                        <div className={`relative rounded-3xl overflow-hidden aspect-square ${
                            darkMode 
                                ? 'bg-[#252525] border border-white/10' 
                                : 'bg-white border border-gray-100'
                        }`}>
                            {/* Profile Image */}
                            <img 
                                src={personalImage}
                                alt="Bry - Web Developer"
                                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Floating "Available for Work" Badge */}
                            <div className={`absolute bottom-4 left-4 right-4 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center gap-3 border shadow-lg ${
                                darkMode
                                    ? 'bg-black/60 border-white/10 text-white'
                                    : 'bg-white/80 border-gray-200/50 text-gray-800'
                            }`}>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-semibold tracking-wide uppercase">
                                    Available for Work
                                </span>
                            </div>
                        </div>

                        {/* Decorative background shape */}
                        <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl ${
                            darkMode 
                                ? 'bg-blue-500/10' 
                                : 'bg-blue-500/5'
                        } -z-10`} />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Pill tags / Badges */}
                        <div className="flex flex-wrap gap-2.5 mb-6">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
                                darkMode 
                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                                    : 'bg-blue-50 text-blue-600 border border-blue-100'
                            }`}>
                                About Me
                            </span>
                            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
                                darkMode 
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                    : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                            }`}>
                                Web Developer
                            </span>
                            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
                                darkMode 
                                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                                    : 'bg-purple-50 text-purple-600 border border-purple-100'
                            }`}>
                                Security Focused
                            </span>
                        </div>

                        <h2 
                            className={`text-4xl md:text-5xl font-bold mb-6 ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Crafting Digital
                            <br />
                            <span className={`${
                                darkMode 
                                    ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent' 
                                    : 'bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'
                            }`}>
                                Experiences
                            </span>
                        </h2>

                        <div 
                            className={`space-y-4 text-lg leading-relaxed ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                        >
                            <p>
                                I create modern, responsive websites that combine clean code, seamless user experiences, 
                                and strong security. With a passion for design and web technologies, I turn ideas into 
                                functional and engaging digital solutions.
                            </p>
                            <p>
                                Beyond coding, I explore the latest design trends, contribute to open-source projects, 
                                and experiment with innovative interfaces. I believe the best websites are where 
                                functionality, aesthetics, and security come together.
                            </p>
                        </div>

                        {/* Interactive Stats Grid */}
                        <div className={`grid grid-cols-3 gap-4 mt-8 pt-8 border-t ${
                            darkMode ? 'border-white/10' : 'border-gray-100'
                        }`}>
                            {[
                                { number: "2+", label: "Years Coding" },
                                { number: "15+", label: "Projects Built" },
                                { number: "100%", label: "Code Quality" }
                            ].map((stat, idx) => (
                                <div key={idx} className="text-left">
                                    <div className={`text-2xl md:text-3xl font-bold ${
                                        darkMode ? 'text-blue-400' : 'text-blue-600'
                                    }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {stat.number}
                                    </div>
                                    <div className={`text-xs md:text-sm mt-1 font-medium ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Interactive CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a 
                                href="#contact"
                                className={`group/btn px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg ${
                                    darkMode 
                                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/25 hover:shadow-blue-500/35' 
                                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/15 hover:shadow-blue-500/25'
                                }`}
                            >
                                Let's Talk
                                <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a 
                                href="#"
                                className={`px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border ${
                                    darkMode 
                                        ? 'border-white/10 hover:bg-white/5 text-gray-200' 
                                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                                }`}
                            >
                                Download Resume
                                <Download size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 
                            className={`text-3xl md:text-4xl font-bold ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Core Values
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`group p-8 rounded-2xl transition-all duration-300 ${
                                    darkMode 
                                        ? 'bg-[#252525] hover:bg-[#2a2a2a] border border-white/5' 
                                        : 'bg-white hover:shadow-xl hover:shadow-blue-500/10 border border-gray-100'
                                }`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                                    darkMode 
                                        ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30' 
                                        : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 group-hover:from-blue-200 group-hover:to-blue-300'
                                }`}>
                                    <value.icon size={28} />
                                </div>
                                <h4 
                                    className={`text-xl font-semibold mb-3 ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {value.title}
                                </h4>
                                <p 
                                    className={`leading-relaxed ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                                >
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}