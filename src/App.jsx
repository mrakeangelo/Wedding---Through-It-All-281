import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import DistanceStory from './components/DistanceStory';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import PasswordProtection from './components/PasswordProtection';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={handleAuthentication} />;
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'dark bg-navy-900' : 'bg-sand-50'
      }`}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/preview" element={
              <Preview 
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                onExit={() => setIsPreview(false)}
              />
            } />
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Header 
                  isDarkMode={isDarkMode} 
                  toggleTheme={toggleTheme}
                  onPreview={() => setIsPreview(true)}
                />
                <main>
                  <Hero />
                  <DistanceStory />
                  <Countdown />
                  <Gallery />
                  <Timeline />
                  <RSVP />
                  <Registry />
                  <Guestbook />
                </main>
                <Footer />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;