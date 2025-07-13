import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiEye, FiSave, FiSun, FiMoon } = FiIcons;
const { BsGlobe } = BsIcons;

const Header = ({ isDarkMode, toggleTheme, onPreview }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Registry', href: '#registry' },
    { name: 'Guestbook', href: '#guestbook' },
  ];

  const handlePreview = () => {
    navigate('/preview');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm border-b border-sand-200 dark:border-navy-700"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <SafeIcon icon={BsGlobe} className="h-8 w-8 text-navy-600 dark:text-sand-300" />
            <span className="font-serif font-semibold text-xl text-navy-800 dark:text-sand-100">
              Through It All
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-navy-700 dark:text-sand-200 hover:text-burgundy-600 dark:hover:text-burgundy-400 font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-sand-100 dark:bg-navy-800 text-navy-700 dark:text-sand-200 hover:bg-sand-200 dark:hover:bg-navy-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={isDarkMode ? "Home" : "Deployed"}
            >
              <SafeIcon icon={isDarkMode ? FiSun : FiMoon} className="h-5 w-5" />
            </motion.button>

            {/* Preview Button */}
            <motion.button
              onClick={handlePreview}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-burgundy-600 text-white hover:bg-burgundy-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiEye} className="h-4 w-4" />
              <span>Preview</span>
            </motion.button>

            {/* Save Draft Button */}
            <motion.button
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg border border-navy-300 dark:border-navy-600 text-navy-700 dark:text-sand-200 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiSave} className="h-4 w-4" />
              <span>Save Draft</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-navy-700 dark:text-sand-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-sand-200 dark:border-navy-700"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-navy-700 dark:text-sand-200 hover:text-burgundy-600 dark:hover:text-burgundy-400 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-2 pt-4">
                <button
                  onClick={handlePreview}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-burgundy-600 text-white hover:bg-burgundy-700 transition-colors"
                >
                  <SafeIcon icon={FiEye} className="h-4 w-4" />
                  <span>Preview</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-navy-300 dark:border-navy-600 text-navy-700 dark:text-sand-200 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors">
                  <SafeIcon icon={FiSave} className="h-4 w-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;