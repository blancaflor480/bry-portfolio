import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, TrendingUp, BookOpen, User } from 'lucide-react';

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
                        className="relative"
                    >
                        <div className={`relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 ${
                            darkMode 
                                ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20' 
                                : 'bg-gradient-to-br from-blue-100 to-blue-200'
                        }`}>
                            {/* Profile Image */}
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69637d0940812d1a111575c0/fe57262f9_gradpic.jpg"
                                alt="Bry - Web Developer"
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Decorative Elements */}
                            <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl ${
                                darkMode 
                                    ? 'bg-blue-500/20' 
                                    : 'bg-gradient-to-br from-blue-400 to-blue-600'
                            } -z-10`} />
                            <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-2xl ${
                                darkMode 
                                    ? 'border-2 border-blue-500/30' 
                                    : 'border-2 border-blue-300'
                            }`} />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
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
                            About Me
                        </motion.span>

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