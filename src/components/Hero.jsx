import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiCalendar, FiHeart } = FiIcons;
const { BsGlobe2 } = BsIcons;

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "Distance means nothing when someone means everything";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Military Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-burgundy-600/20 border border-burgundy-400/30 text-burgundy-200 text-sm font-medium mb-8"
        >
          <SafeIcon icon={BsGlobe2} className="h-4 w-4" />
          <span>Military • Long Distance • Love</span>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Sarah & Michael
          </h1>
          <div className="flex items-center justify-center space-x-4 text-sand-200">
            <span className="font-serif text-xl">Johnson</span>
            <SafeIcon icon={FiHeart} className="h-6 w-6 text-burgundy-400" />
            <span className="font-serif text-xl">Davis</span>
          </div>
        </motion.div>

        {/* Typewriter Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl text-sand-100 font-light italic min-h-[2rem]">
            &quot;{currentText}{isTyping && <span className="animate-pulse">|</span>}&quot;
          </p>
        </motion.div>

        {/* Wedding Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12"
        >
          <div className="flex items-center space-x-2 text-sand-200">
            <SafeIcon icon={FiCalendar} className="h-5 w-5" />
            <span className="font-medium">June 15, 2024</span>
          </div>
          <div className="flex items-center space-x-2 text-sand-200">
            <SafeIcon icon={FiMapPin} className="h-5 w-5" />
            <span className="font-medium">Fort Bragg, NC</span>
          </div>
        </motion.div>

        {/* Mission Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-burgundy-400 font-serif">3</div>
            <div className="text-sm text-sand-300">Years Apart</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-burgundy-400 font-serif">2</div>
            <div className="text-sm text-sand-300">Continents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-burgundy-400 font-serif">∞</div>
            <div className="text-sm text-sand-300">Love</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sand-300 text-sm">Scroll to explore our journey</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-sand-300 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-sand-300 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;