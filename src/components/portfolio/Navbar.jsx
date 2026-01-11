import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'My Project', id: 'projects' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? darkMode 
                        ? 'bg-[#252525]/90 backdrop-blur-xl shadow-lg shadow-black/20' 
                        : 'bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-500/10'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className={`text-3xl font-bold tracking-tight cursor-pointer ${
                            darkMode 
                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        onClick={() => scrollToSection('home')}
                    >
                        Bry
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    darkMode 
                                        ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('contact')}
                            className={`ml-2 px-6 py-2.5 rounded-[10px] text-sm font-medium transition-all duration-300 ${
                                darkMode 
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-lg shadow-blue-500/30' 
                                    : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-lg shadow-blue-500/30'
                            }`}
                            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                        >
                            Contact Us
                        </motion.button>

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setDarkMode(!darkMode)}
                            className={`ml-4 p-3 rounded-full transition-all duration-300 ${
                                darkMode 
                                    ? 'bg-white/10 text-yellow-400 hover:bg-white/20' 
                                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                            }`}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2.5 rounded-full ${
                                darkMode 
                                    ? 'bg-white/10 text-yellow-400' 
                                    : 'bg-blue-50 text-blue-600'
                            }`}
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2.5 rounded-lg ${
                                darkMode ? 'text-white' : 'text-gray-700'
                            }`}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`md:hidden overflow-hidden ${
                            darkMode ? 'bg-[#252525]/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'
                        }`}
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                                        darkMode 
                                            ? 'text-gray-300 hover:bg-white/10' 
                                            : 'text-gray-600 hover:bg-blue-50'
                                    }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left px-4 py-3 rounded-[10px] text-base font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                            >
                                Contact Us
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}