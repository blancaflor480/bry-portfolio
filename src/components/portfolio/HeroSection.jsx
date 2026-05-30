import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection({ darkMode }) {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const roles = ["Web Developer", "IT Security Officer"];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section 
            id="home" 
            className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 ${
                darkMode 
                    ? 'bg-[#252525]' 
                    : 'bg-gradient-to-br from-white via-blue-50/50 to-white'
            }`}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ 
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
                        darkMode 
                            ? 'bg-blue-600/20' 
                            : 'bg-gradient-to-br from-blue-400/30 to-blue-600/20'
                    }`}
                />
                <motion.div
                    animate={{ 
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
                        darkMode 
                            ? 'bg-blue-500/15' 
                            : 'bg-gradient-to-tr from-blue-300/25 to-blue-500/15'
                    }`}
                />
            </div>

            {/* Subtle Tech-Grid Background Pattern */}
            <div className={`absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none z-0 ${
                darkMode ? 'text-white' : 'text-blue-900'
            }`}
            style={{
                backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px'
            }} />

            {/* Floating Social Icons */}
            <div className="hidden lg:flex flex-col gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-20">
                {[
                    { icon: Github, href: "https://github.com/blancaflor480", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/jade-ryan-blancaflor-498485346", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:Blancaflor480@gmail.com", label: "Email" }
                ].map((social, idx) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                            darkMode 
                                ? 'bg-[#252525]/80 backdrop-blur border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20' 
                                : 'bg-white/80 backdrop-blur border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                        }`}
                        title={social.label}
                    >
                        <social.icon size={20} />
                    </motion.a>
                ))}
                {/* Vertical decorative line */}
                <div className={`w-[1px] h-20 mx-auto ${
                    darkMode ? 'bg-white/10' : 'bg-gray-200'
                }`} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Code Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <motion.div 
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05 }}
                            className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                                darkMode 
                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/30' 
                                    : 'bg-gradient-to-br from-blue-50 to-blue-100/80 text-blue-600 border border-blue-100 hover:from-blue-100 hover:to-blue-200/80 hover:shadow-lg hover:shadow-blue-500/15'
                            }`}
                        >
                            <Code2 size={40} className="transform group-hover:rotate-12 transition-transform duration-300" />
                        </motion.div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className={`text-lg md:text-xl font-medium mb-4 ${
                            darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                    >
                        Hi, I'm Bry
                    </motion.p>

                    {/* Main Title */}
                    <h1
                        className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="inline-block"
                        >
                            I'm a{' '}
                        </motion.span>
                        <br className="sm:hidden" />
                        <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden align-bottom">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`bg-gradient-to-r ${
                                        darkMode 
                                            ? 'from-blue-400 via-indigo-400 to-purple-400' 
                                            : 'from-blue-600 via-indigo-600 to-purple-700'
                                    } bg-clip-text text-transparent pb-1`}
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                    >
                        I build websites that look modern, work fast, and deliver exceptional user experiences. 
                        Let's create something amazing together.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToProjects}
                            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center gap-3"
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                        >
                            View My Work
                            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://drive.google.com/file/d/1ewrC-FJay-t3DMnZG8FmeIyb6pJcy-95/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 ${
                                darkMode 
                                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' 
                                    : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 shadow-lg'
                            }`}
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                        >
                            <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ 
                    opacity: { delay: 1.5, duration: 0.5 },
                    y: { delay: 1.5, duration: 2, repeat: Infinity }
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${
                    darkMode ? 'border-white/30' : 'border-gray-300'
                }`}>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`w-1.5 h-1.5 rounded-full ${
                            darkMode ? 'bg-blue-400' : 'bg-blue-600'
                        }`}
                    />
                </div>
            </motion.div>
        </section>
    );
}