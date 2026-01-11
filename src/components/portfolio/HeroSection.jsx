import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Code2 } from 'lucide-react';

export default function HeroSection({ darkMode }) {
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                {darkMode && (
                    <>
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
                        />
                        <motion.div
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full"
                        />
                        <motion.div
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                            className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full"
                        />
                    </>
                )}
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
                        <div className={`p-4 rounded-2xl ${
                            darkMode 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                        }`}>
                            <Code2 size={40} />
                        </div>
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
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                            darkMode 
                                ? 'text-white' 
                                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        I'm a{' '}
                        <span className={`${
                            darkMode 
                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'
                        }`}>
                            Web Developer
                        </span>
                        <br />
                        <span className={`text-3xl md:text-4xl lg:text-5xl ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            / IT Security
                        </span>
                    </motion.h1>

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