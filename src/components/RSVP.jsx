import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiMail, FiPhone, FiUsers, FiHeart, FiSend } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: '',
    dietary: '',
    journey: '',
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('RSVP submitted:', formData);
    // You would typically send this to your backend or Supabase
  };

  return (
    <section id="rsvp" className="py-20 bg-navy-800 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-sand-200 max-w-3xl mx-auto">
            We need your confirmation for our special day. Please RSVP by May 1st, 2024.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-navy-800 rounded-lg p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-3 h-5 w-5 text-navy-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-3 h-5 w-5 text-navy-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <SafeIcon icon={FiPhone} className="absolute left-3 top-3 h-5 w-5 text-navy-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Number of Guests *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUsers} className="absolute left-3 top-3 h-5 w-5 text-navy-400" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                    required
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Will you be attending? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-burgundy-600 focus:ring-burgundy-500 border-gray-300"
                    />
                    <span className="ml-2 text-navy-700 dark:text-sand-200">Yes, I'll be there!</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-burgundy-600 focus:ring-burgundy-500 border-gray-300"
                    />
                    <span className="ml-2 text-navy-700 dark:text-sand-200">Sorry, can't make it</span>
                  </label>
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Dietary Restrictions
                </label>
                <textarea
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                  placeholder="Any allergies or dietary requirements?"
                />
              </div>

              {/* Journey Memory */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  What do you remember most about our journey?
                </label>
                <textarea
                  name="journey"
                  value={formData.journey}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                  placeholder="Share a memory from our long-distance journey..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Message for the Couple
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                  placeholder="Any special message for Sarah & Michael?"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-burgundy-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSend} className="h-5 w-5" />
                <span>Send RSVP</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-burgundy-600/10 border border-burgundy-400/20 rounded-lg p-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-4 flex items-center">
                <SafeIcon icon={FiHeart} className="h-6 w-6 mr-2 text-burgundy-400" />
                RSVP Details
              </h3>
              <div className="space-y-4 text-sand-200">
                <div>
                  <h4 className="font-semibold text-burgundy-400">Deadline</h4>
                  <p>Please respond by May 1st, 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-burgundy-400">Guest Limit</h4>
                  <p>Maximum 4 guests per invitation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-burgundy-400">Base Access</h4>
                  <p>Military ID or guest pass required for Fort Bragg entry</p>
                </div>
                <div>
                  <h4 className="font-semibold text-burgundy-400">Contact</h4>
                  <p>Questions? Email us at sarah.michael.wedding@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg p-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Hotel Accommodations
              </h3>
              <div className="space-y-4 text-sand-200">
                <div>
                  <h4 className="font-semibold text-sand-100">Recommended Hotels</h4>
                  <p className="text-sm">Hampton Inn Fayetteville</p>
                  <p className="text-sm">Hilton Garden Inn</p>
                  <p className="text-sm">Use code "SARAHMICHAEL" for discounts</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sand-100">Transportation</h4>
                  <p className="text-sm">Shuttle service available from hotels to base</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;