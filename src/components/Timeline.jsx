import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiHeart, FiCalendar, FiClock } = FiIcons;
const { BsAirplane } = BsIcons;

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      id: 1,
      time: "2:00 PM",
      event: "Guest Arrival & Welcome",
      description: "Join us at Fort Bragg Chapel for our celebration",
      icon: FiMapPin,
      type: "arrival"
    },
    {
      id: 2,
      time: "3:30 PM",
      event: "Pre-Ceremony Photos",
      description: "Capturing memories before the big moment",
      icon: FiCalendar,
      type: "photos"
    },
    {
      id: 3,
      time: "4:00 PM",
      event: "Ceremony Begins",
      description: "The moment we've been waiting for - finally saying 'I do'",
      icon: FiHeart,
      type: "ceremony"
    },
    {
      id: 4,
      time: "4:30 PM",
      event: "Recessional & Congratulations",
      description: "Walking down the aisle as husband and wife",
      icon: BsAirplane,
      type: "recessional"
    },
    {
      id: 5,
      time: "5:00 PM",
      event: "Cocktail Hour",
      description: "Celebrating with drinks and military toasts",
      icon: FiClock,
      type: "cocktails"
    },
    {
      id: 6,
      time: "6:30 PM",
      event: "Reception & Dinner",
      description: "Dinner, dancing, and celebrating our reunion",
      icon: FiHeart,
      type: "reception"
    },
    {
      id: 7,
      time: "10:00 PM",
      event: "Last Dance",
      description: "One final dance before we start our forever",
      icon: FiHeart,
      type: "last-dance"
    }
  ];

  const getEventColor = (type) => {
    switch (type) {
      case 'ceremony':
        return 'bg-burgundy-600 text-white';
      case 'reception':
        return 'bg-navy-600 text-white';
      case 'last-dance':
        return 'bg-olive-600 text-white';
      default:
        return 'bg-sand-200 dark:bg-navy-700 text-navy-700 dark:text-sand-200';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-sand-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-sand-100 mb-4">
            Wedding Timeline
          </h2>
          <p className="text-xl text-navy-600 dark:text-sand-300 max-w-3xl mx-auto">
            Our mission plan for the perfect day - June 15, 2024
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-burgundy-600 via-navy-600 to-olive-600 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="passport-stamp bg-white dark:bg-navy-800 p-6 rounded-lg shadow-lg border-2 border-dashed border-burgundy-600/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getEventColor(event.type)}`}>
                        <SafeIcon icon={event.icon} className="h-5 w-5" />
                      </div>
                      <div className="text-2xl font-bold text-burgundy-600 dark:text-burgundy-400 font-mono">
                        {event.time}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-sand-100 mb-2">
                      {event.event}
                    </h3>
                    <p className="text-navy-600 dark:text-sand-300">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-6 h-6 rounded-full border-4 border-white dark:border-navy-900 ${getEventColor(event.type)} shadow-lg`}></div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-navy-800 rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-sand-100 mb-4">
              Important Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-burgundy-600 dark:text-burgundy-400 mb-2">Dress Code</h4>
                <p className="text-navy-600 dark:text-sand-300">Military dress uniform or formal attire</p>
              </div>
              <div>
                <h4 className="font-semibold text-burgundy-600 dark:text-burgundy-400 mb-2">Location</h4>
                <p className="text-navy-600 dark:text-sand-300">Fort Bragg Chapel & Reception Hall</p>
              </div>
              <div>
                <h4 className="font-semibold text-burgundy-600 dark:text-burgundy-400 mb-2">Parking</h4>
                <p className="text-navy-600 dark:text-sand-300">Available on base with guest pass</p>
              </div>
              <div>
                <h4 className="font-semibold text-burgundy-600 dark:text-burgundy-400 mb-2">Special Request</h4>
                <p className="text-navy-600 dark:text-sand-300">Please bring your base ID for entry</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;