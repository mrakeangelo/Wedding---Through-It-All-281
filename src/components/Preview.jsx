import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiSun, FiMoon } = FiIcons;

const Preview = ({ isDarkMode, toggleTheme, onExit }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark bg-navy-900' : 'bg-sand-50'
    }`}>
      {/* Preview Header */}
      <div className="bg-burgundy-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={handleExit}
              className="flex items-center space-x-2 px-4 py-2 bg-burgundy-700 rounded-lg hover:bg-burgundy-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiArrowLeft} className="h-4 w-4" />
              <span>Exit Preview</span>
            </motion.button>
            <div>
              <h1 className="font-serif text-xl font-bold">Preview Mode</h1>
              <p className="text-sm text-burgundy-100">Through It All - Wedding Template</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-burgundy-700 hover:bg-burgundy-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={isDarkMode ? "Home" : "Deployed"}
            >
              <SafeIcon icon={isDarkMode ? FiSun : FiMoon} className="h-5 w-5" />
            </motion.button>
            <div className="text-sm">
              <div className="font-medium">Sarah & Michael</div>
              <div className="text-burgundy-100">June 15, 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hero Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-sand-100 mb-4">
                Hero Section
              </h3>
              <div className="space-y-3">
                <div className="h-4 bg-burgundy-200 dark:bg-burgundy-800 rounded w-3/4"></div>
                <div className="h-3 bg-sand-200 dark:bg-navy-700 rounded w-1/2"></div>
                <div className="h-3 bg-sand-200 dark:bg-navy-700 rounded w-2/3"></div>
              </div>
            </motion.div>

            {/* Story Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-sand-100 mb-4">
                Distance Story
              </h3>
              <div className="space-y-3">
                <div className="h-3 bg-navy-200 dark:bg-navy-700 rounded w-full"></div>
                <div className="h-3 bg-navy-200 dark:bg-navy-700 rounded w-4/5"></div>
                <div className="h-3 bg-navy-200 dark:bg-navy-700 rounded w-3/4"></div>
              </div>
            </motion.div>

            {/* Gallery Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-sand-100 mb-4">
                Photo Gallery
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 bg-olive-200 dark:bg-olive-800 rounded"></div>
                <div className="h-16 bg-olive-200 dark:bg-olive-800 rounded"></div>
                <div className="h-16 bg-olive-200 dark:bg-olive-800 rounded"></div>
                <div className="h-16 bg-olive-200 dark:bg-olive-800 rounded"></div>
              </div>
            </motion.div>

            {/* Timeline Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-sand-100 mb-4">
                Wedding Timeline
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-burgundy-600 rounded-full"></div>
                  <div className="h-3 bg-sand-200 dark:bg-navy-700 rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-navy-600 rounded-full"></div>
                  <div className="h-3 bg-sand-200 dark:bg-navy-700 rounded flex-1"></div>
                </div>
              </div>
            </motion.div>

            {/* RSVP Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-sand-100 mb-4">
                RSVP Form
              </h3>
              <div className="space-y-3">
                <div className="h-8 bg-sand-100 dark:bg-navy-700 rounded border border-sand-300 dark:border-navy-600"></div>
                <div className="h-8 bg-sand-100 dark:bg-navy-700 rounded border border-sand-300 dark:border-navy-600"></div>
                <div className="h-8 bg-burgundy-600 rounded text-white flex items-center justify-center text-sm font-medium">
                  Send RSVP
                </div>
              </div>
            </motion.div>

            {/* Registry Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-sand-100 mb-4">
                Registry
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-3 bg-sand-200 dark:bg-navy-700 rounded w-2/3"></div>
                  <div className="h-3 bg-burgundy-200 dark:bg-burgundy-800 rounded w-1/4"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-3 bg-sand-200 dark:bg-navy-700 rounded w-1/2"></div>
                  <div className="h-3 bg-navy-200 dark:bg-navy-700 rounded w-1/3"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Template Features */}
          <div className="mt-12">
            <h2 className="font-serif text-3xl font-bold text-navy-800 dark:text-sand-100 text-center mb-8">
              Template Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Responsive Design', desc: 'Perfect on all devices' },
                { title: 'Dark/Light Mode', desc: 'Deployed/Home toggle' },
                { title: 'Password Protected', desc: 'Private wedding site' },
                { title: 'Interactive Elements', desc: 'Animations & transitions' },
                { title: 'Photo Gallery', desc: 'Showcase your journey' },
                { title: 'RSVP System', desc: 'Manage guest responses' },
                { title: 'Registry Integration', desc: 'Link to gift registries' },
                { title: 'Timeline View', desc: 'Wedding day schedule' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-4 text-center"
                >
                  <h4 className="font-semibold text-navy-800 dark:text-sand-100 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-navy-600 dark:text-sand-300">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;