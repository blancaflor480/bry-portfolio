import React from 'react';
import { motion } from 'framer-motion';
import { Github, Facebook, Briefcase, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ darkMode }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' }
    ];

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/blancaflor480" },
        { icon: Briefcase, label: "LinkedIn", href: "https://www.linkedin.com/in/jade-ryan-blancaflor-498485346" },
        { icon: Facebook, label: "Facebook", href: "#" }
    ];

    return (
        <footer className={`relative pt-20 pb-8 ${
            darkMode 
                ? 'bg-[#1a1a1a]' 
                : 'bg-gradient-to-b from-gray-50 to-white'
        }`}>
            {/* Top Border Gradient */}
            <div className={`absolute top-0 left-0 right-0 h-px ${
                darkMode 
                    ? 'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' 
                    : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent'
            }`} />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Logo & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 
                            className={`text-3xl font-bold mb-4 ${
                                darkMode 
                                    ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent' 
                                    : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
                            }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Bry
                        </h3>
                        <p 
                            className={`leading-relaxed ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                        >
                            A passionate Web Developer & IT Security specialist creating modern, 
                            secure, and user-friendly digital experiences.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 
                            className={`text-lg font-semibold mb-6 ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className={`transition-colors duration-300 hover:translate-x-1 inline-block ${
                                            darkMode 
                                                ? 'text-gray-400 hover:text-blue-400' 
                                                : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 
                            className={`text-lg font-semibold mb-6 ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                        darkMode 
                                            ? 'bg-white/10 text-white hover:bg-blue-500' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white'
                                    }`}
                                    title={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                    darkMode ? 'border-white/10' : 'border-gray-200'
                }`}>
                    <p 
                        className={`flex items-center gap-2 text-sm ${
                            darkMode ? 'text-gray-500' : 'text-gray-500'
                        }`}
                        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                    >
                        © {new Date().getFullYear()} Bry. Made with 
                        <Heart size={14} className="text-red-500 fill-red-500" /> 
                        All rights reserved.
                    </p>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            darkMode 
                                ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white' 
                                : 'bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white'
                        }`}
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}