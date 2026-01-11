import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Facebook, Briefcase, Send, User, MessageSquare } from 'lucide-react';
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactSection({ darkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "Blancaflor480@gmail.com",
            href: "mailto:Blancaflor480@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone No",
            value: "09932313083",
            href: "tel:09932313083"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Cavite, Philippines"
        }
    ];

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "#" },
        { icon: Briefcase, label: "Indeed", href: "#" },
        { icon: Facebook, label: "Facebook", href: "#" }
    ];

    return (
        <section 
            id="contact" 
            className={`py-24 lg:py-32 relative overflow-hidden ${
                darkMode 
                    ? 'bg-[#252525]' 
                    : 'bg-gradient-to-b from-white via-blue-50/30 to-white'
            }`}
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ 
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl ${
                        darkMode ? 'bg-blue-600/10' : 'bg-blue-200/40'
                    }`}
                />
                <motion.div
                    animate={{ 
                        x: [0, -40, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl ${
                        darkMode ? 'bg-blue-500/10' : 'bg-blue-100/50'
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
                        Contact
                    </motion.span>
                    <h2 
                        className={`text-4xl md:text-5xl font-bold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Get In{' '}
                        <span className={`${
                            darkMode 
                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent' 
                                : 'bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'
                        }`}>
                            Touch
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-8 mb-12">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-5"
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                        darkMode 
                                            ? 'bg-blue-500/20 text-blue-400' 
                                            : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600'
                                    }`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p 
                                            className={`text-sm font-medium mb-1 ${
                                                darkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`}
                                        >
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a 
                                                href={item.href}
                                                className={`text-lg font-semibold transition-colors ${
                                                    darkMode 
                                                        ? 'text-white hover:text-blue-400' 
                                                        : 'text-gray-900 hover:text-blue-600'
                                                }`}
                                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p 
                                                className={`text-lg font-semibold ${
                                                    darkMode ? 'text-white' : 'text-gray-900'
                                                }`}
                                                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                                            >
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 
                                className={`text-xl font-semibold mb-6 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                            darkMode 
                                                ? 'bg-white/10 text-white hover:bg-blue-500 hover:text-white' 
                                                : 'bg-gray-100 text-gray-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white'
                                        }`}
                                        title={social.label}
                                    >
                                        <social.icon size={22} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${
                            darkMode 
                                ? 'bg-[#1a1a1a] border border-white/5' 
                                : 'bg-white shadow-xl shadow-blue-500/10 border border-gray-100'
                        }`}>
                            <h3 
                                className={`text-2xl font-semibold mb-8 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                Send a Message
                            </h3>

                            <div className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="relative">
                                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                                            darkMode ? 'text-gray-500' : 'text-gray-400'
                                        }`} size={18} />
                                        <Input
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`pl-12 py-6 rounded-xl border-2 transition-all duration-300 ${
                                                darkMode 
                                                    ? 'bg-[#252525] border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500' 
                                                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white'
                                            }`}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                                            darkMode ? 'text-gray-500' : 'text-gray-400'
                                        }`} size={18} />
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`pl-12 py-6 rounded-xl border-2 transition-all duration-300 ${
                                                darkMode 
                                                    ? 'bg-[#252525] border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500' 
                                                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white'
                                            }`}
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <MessageSquare className={`absolute left-4 top-4 ${
                                        darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} size={18} />
                                    <Input
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`pl-12 py-6 rounded-xl border-2 transition-all duration-300 ${
                                            darkMode 
                                                ? 'bg-[#252525] border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500' 
                                                : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white'
                                        }`}
                                    />
                                </div>

                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`rounded-xl border-2 transition-all duration-300 resize-none ${
                                        darkMode 
                                            ? 'bg-[#252525] border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500' 
                                            : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white'
                                    }`}
                                />

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.5)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
                                    style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
                                >
                                    Send Message
                                    <Send size={20} />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}