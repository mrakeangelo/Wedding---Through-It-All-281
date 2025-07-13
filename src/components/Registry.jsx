import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiCamera, FiGift, FiExternalLink } = FiIcons;
const { BsAirplane } = BsIcons;

const Registry = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const registryCategories = [
    {
      id: 'home',
      name: 'Building Our Home',
      icon: FiHome,
      color: 'burgundy',
      description: 'Help us create our first home together',
      items: [
        { name: 'Kitchen Essentials Set', price: '$150', store: 'Williams Sonoma', priority: 'high' },
        { name: 'Cozy Throw Blankets', price: '$80', store: 'Pottery Barn', priority: 'medium' },
        { name: 'Dining Table Set', price: '$800', store: 'West Elm', priority: 'high' },
        { name: 'Bedroom Linens', price: '$200', store: 'Restoration Hardware', priority: 'medium' }
      ]
    },
    {
      id: 'travel',
      name: 'Adventures Together',
      icon: BsAirplane,
      color: 'navy',
      description: 'Fund our travels and adventures as a married couple',
      items: [
        { name: 'Honeymoon Fund', price: '$500', store: 'Honeyfund', priority: 'high' },
        { name: 'Travel Luggage Set', price: '$300', store: 'Away', priority: 'medium' },
        { name: 'Camera for Memories', price: '$400', store: 'B&H Photo', priority: 'high' },
        { name: 'Travel Experience Fund', price: '$200', store: 'Airbnb Gift Card', priority: 'medium' }
      ]
    },
    {
      id: 'memories',
      name: 'Capturing Memories',
      icon: FiCamera,
      color: 'olive',
      description: 'Help us document our journey together',
      items: [
        { name: 'Professional Photo Album', price: '$120', store: 'Shutterfly', priority: 'high' },
        { name: 'Instant Camera', price: '$90', store: 'Fujifilm', priority: 'medium' },
        { name: 'Picture Frames Set', price: '$60', store: 'Target', priority: 'low' },
        { name: 'Memory Scrapbook Kit', price: '$45', store: 'Michaels', priority: 'low' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('home');

  const getColorClasses = (color) => {
    switch (color) {
      case 'burgundy':
        return 'bg-burgundy-600 text-white border-burgundy-600';
      case 'navy':
        return 'bg-navy-600 text-white border-navy-600';
      case 'olive':
        return 'bg-olive-600 text-white border-olive-600';
      default:
        return 'bg-sand-200 text-navy-700 border-sand-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-burgundy-100 text-burgundy-800 border-burgundy-200';
      case 'medium':
        return 'bg-navy-100 text-navy-800 border-navy-200';
      case 'low':
        return 'bg-sand-100 text-sand-800 border-sand-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const activeRegistryCategory = registryCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="registry" className="py-20 bg-white dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-sand-100 mb-4">
            Building Our Life Together
          </h2>
          <p className="text-xl text-navy-600 dark:text-sand-300 max-w-3xl mx-auto">
            After years apart, we're excited to build our first home together. Your support means the world to us.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {registryCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-4 rounded-lg font-medium transition-all flex items-center space-x-3 ${
                activeCategory === category.id
                  ? getColorClasses(category.color)
                  : 'bg-sand-100 dark:bg-navy-700 text-navy-700 dark:text-sand-200 hover:bg-sand-200 dark:hover:bg-navy-600 border border-sand-300 dark:border-navy-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={category.icon} className="h-5 w-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Registry Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Category Info */}
          <div className="lg:col-span-1">
            <div className="bg-sand-50 dark:bg-navy-700 rounded-lg p-6 sticky top-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(activeRegistryCategory.color)}`}>
                  <SafeIcon icon={activeRegistryCategory.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-sand-100">
                  {activeRegistryCategory.name}
                </h3>
              </div>
              <p className="text-navy-600 dark:text-sand-300 mb-6">
                {activeRegistryCategory.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-burgundy-600 rounded-full"></div>
                  <span className="text-sm text-navy-600 dark:text-sand-300">High Priority</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-navy-600 rounded-full"></div>
                  <span className="text-sm text-navy-600 dark:text-sand-300">Medium Priority</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-sand-400 rounded-full"></div>
                  <span className="text-sm text-navy-600 dark:text-sand-300">Low Priority</span>
                </div>
              </div>
            </div>
          </div>

          {/* Registry Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeRegistryCategory.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-navy-900 rounded-lg p-6 shadow-lg border border-sand-200 dark:border-navy-600 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-lg text-navy-800 dark:text-sand-100">
                      {item.name}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-burgundy-600 dark:text-burgundy-400">
                        {item.price}
                      </span>
                      <span className="text-sm text-navy-600 dark:text-sand-400">
                        {item.store}
                      </span>
                    </div>
                    
                    <motion.button
                      className="w-full bg-burgundy-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-burgundy-700 transition-colors flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SafeIcon icon={FiGift} className="h-4 w-4" />
                      <span>Purchase Gift</span>
                      <SafeIcon icon={FiExternalLink} className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Registry Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-sand-100 mb-6">
            Complete Registry Links
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Amazon', 'Target', 'Williams Sonoma', 'Pottery Barn'].map((store) => (
              <motion.a
                key={store}
                href="#"
                className="px-6 py-3 bg-sand-100 dark:bg-navy-700 text-navy-700 dark:text-sand-200 rounded-lg font-medium hover:bg-sand-200 dark:hover:bg-navy-600 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{store}</span>
                <SafeIcon icon={FiExternalLink} className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Thank You Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="bg-sand-50 dark:bg-navy-700 rounded-lg p-8 max-w-3xl mx-auto">
            <SafeIcon icon={FiHeart} className="h-12 w-12 text-burgundy-600 dark:text-burgundy-400 mx-auto mb-4" />
            <blockquote className="text-lg italic text-navy-700 dark:text-sand-200 mb-4">
              "Your presence at our wedding is the greatest gift of all. These items will help us build 
              the home we've dreamed of during our years apart."
            </blockquote>
            <cite className="text-burgundy-600 dark:text-burgundy-400 font-medium">
              - Sarah & Michael
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;