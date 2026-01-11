import React, { useState, useEffect } from 'react';
import Navbar from '../portfolio/Navbar';
import HeroSection from '../portfolio/HeroSection';
import AboutSection from '../portfolio/AboutSection';
import SkillsSection from '../portfolio/SkillsSection';
import ProjectsSection from '../portfolio/ProjectsSection';
import ContactSection from '../portfolio/ContactSection';
import Footer from '../portfolio/Footer';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for system preference or saved preference
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            setDarkMode(JSON.parse(savedMode));
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <div className={`min-h-screen transition-colors duration-500 ${
            darkMode ? 'bg-[#252525]' : 'bg-white'
        }`}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
                    
                    html {
                        scroll-behavior: smooth;
                    }
                    
                    ::-webkit-scrollbar {
                        width: 10px;
                    }
                    
                    ::-webkit-scrollbar-track {
                        background: ${darkMode ? '#1a1a1a' : '#f1f5f9'};
                    }
                    
                    ::-webkit-scrollbar-thumb {
                        background: ${darkMode ? '#3b82f6' : '#3b82f6'};
                        border-radius: 5px;
                    }
                    
                    ::-webkit-scrollbar-thumb:hover {
                        background: ${darkMode ? '#2563eb' : '#2563eb'};
                    }

                    ::selection {
                        background: #3b82f6;
                        color: white;
                    }
                `}
            </style>
            
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <HeroSection darkMode={darkMode} />
            <AboutSection darkMode={darkMode} />
            <SkillsSection darkMode={darkMode} />
            <ProjectsSection darkMode={darkMode} />
            <ContactSection darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    );
}