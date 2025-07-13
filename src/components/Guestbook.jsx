import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUser, FiMessageCircle, FiSend } = FiIcons;

const Guestbook = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Captain Johnson',
      message: 'So proud to see you both finally together! Your love story has inspired us all during deployment.',
      date: '2024-03-15',
      location: 'Fort Bragg, NC'
    },
    {
      id: 2,
      name: 'Sarah\'s Mom',
      message: 'Watching you two navigate the distance with such grace and love has been beautiful. Welcome home, Michael!',
      date: '2024-03-14',
      location: 'Charlotte, NC'
    },
    {
      id: 3,
      name: 'The Garcia Family',
      message: 'Your FaceTime calls kept us all connected during the deployment. Can\'t wait to celebrate with you both!',
      date: '2024-03-13',
      location: 'San Antonio, TX'
    },
    {
      id: 4,
      name: 'Lieutenant Davis',
      message: 'Brotherhood extends to the home front. Sarah, thank you for your service too. Military spouses are heroes.',
      date: '2024-03-12',
      location: 'Ramstein, Germany'
    }
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: new Date().toISOString().split('T')[0],
        location: 'Online'
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-sand-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-sand-100 mb-4">
            Leave a Word of Welcome Home
          </h2>
          <p className="text-xl text-navy-600 dark:text-sand-300 max-w-3xl mx-auto">
            Share your thoughts, memories, and well-wishes for our new chapter together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-navy-800 rounded-lg p-8 shadow-xl"
          >
            <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-sand-100 mb-6 flex items-center">
              <SafeIcon icon={FiMessageCircle} className="h-6 w-6 mr-2 text-burgundy-600" />
              Write Your Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-3 h-5 w-5 text-navy-400" />
                  <input
                    type="text"
                    value={newMessage.name}
                    onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
                  Your Message
                </label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                  placeholder="Share your thoughts, memories, or well-wishes..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-burgundy-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSend} className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-sand-100 mb-6 flex items-center">
              <SafeIcon icon={FiHeart} className="h-6 w-6 mr-2 text-burgundy-600" />
              Messages from Loved Ones
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="letter-paper bg-white dark:bg-navy-800 p-6 rounded-lg shadow-lg border border-sand-200 dark:border-navy-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-navy-800 dark:text-sand-100">
                        {message.name}
                      </h4>
                      <p className="text-sm text-navy-600 dark:text-sand-400">
                        {message.location} • {new Date(message.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-navy-700 dark:text-sand-200 leading-relaxed">
                    {message.message}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy-600 dark:text-burgundy-400 font-serif">
                {messages.length}
              </div>
              <div className="text-sm text-navy-600 dark:text-sand-400">Messages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy-600 dark:text-burgundy-400 font-serif">
                4
              </div>
              <div className="text-sm text-navy-600 dark:text-sand-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy-600 dark:text-burgundy-400 font-serif">
                12
              </div>
              <div className="text-sm text-navy-600 dark:text-sand-400">States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-burgundy-600 dark:text-burgundy-400 font-serif">
                ∞
              </div>
              <div className="text-sm text-navy-600 dark:text-sand-400">Love</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;