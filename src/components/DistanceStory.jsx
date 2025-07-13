import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiVideo, FiClock, FiHeart } = FiIcons;
const { BsAirplane } = BsIcons;

const DistanceStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chapters = [
    {
      id: 1,
      title: "Stationed in Germany",
      subtitle: "March 2021",
      content: "When duty called, Michael was deployed to Ramstein Air Base. What we thought would be a year turned into three years of love letters, care packages, and counting down the days until we could be together again.",
      icon: FiMapPin,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      stats: { distance: "4,200 miles", timezone: "6 hours ahead" }
    },
    {
      id: 2,
      title: "Time Zones & FaceTimes",
      subtitle: "2021-2023",
      content: "Every day started with calculating what time it was for you. 6 AM calls became our coffee dates. Midnight messages became our goodnight kisses. We learned that love doesn't follow time zones.",
      icon: FiVideo,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      stats: { calls: "1,247 video calls", messages: "15,000+ texts" }
    },
    {
      id: 3,
      title: "The Countdown",
      subtitle: "January 2024",
      content: "When we finally got the orders for your return, we started counting down. Not just days, but hours, minutes, seconds. Every sunset brought us one day closer to our sunrise together.",
      icon: FiClock,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      stats: { countdown: "147 days", letters: "89 letters sent" }
    },
    {
      id: 4,
      title: "Finally Together",
      subtitle: "May 2024",
      content: "The moment you walked through that airport gate, everything made sense. Every sleepless night, every missed call, every tear was worth this moment. We were finally home - together.",
      icon: FiHeart,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop",
      stats: { reunion: "May 15, 2024", tears: "Countless happy tears" }
    }
  ];

  return (
    <section id="story" className="py-20 bg-sand-50 dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-sand-100 mb-4">
            Our Distance Story
          </h2>
          <p className="text-xl text-navy-600 dark:text-sand-300 max-w-3xl mx-auto">
            A journey of love that conquered miles, time zones, and the test of time itself.
          </p>
        </motion.div>

        <div className="space-y-20">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center">
                    <SafeIcon icon={chapter.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-800 dark:text-sand-100">
                      {chapter.title}
                    </h3>
                    <p className="text-burgundy-600 dark:text-burgundy-400 font-medium">
                      {chapter.subtitle}
                    </p>
                  </div>
                </div>

                <div className="letter-paper bg-white dark:bg-navy-800 p-6 rounded-lg shadow-lg border border-sand-200 dark:border-navy-700">
                  <p className="text-navy-700 dark:text-sand-200 leading-relaxed text-lg">
                    {chapter.content}
                  </p>
                </div>

                <div className="flex space-x-6">
                  {Object.entries(chapter.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-burgundy-600 dark:text-burgundy-400">
                        {value}
                      </div>
                      <div className="text-sm text-navy-600 dark:text-sand-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg shadow-xl"
                >
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="passport-stamp w-20 h-20 bg-white/90 flex items-center justify-center text-xs font-bold text-burgundy-600">
                      {chapter.id}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Route */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-4 h-4 bg-navy-600 rounded-full"></div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-navy-600 via-burgundy-600 to-navy-600"></div>
            <SafeIcon icon={BsAirplane} className="h-8 w-8 text-burgundy-600 transform rotate-45" />
            <div className="flex-1 h-0.5 bg-gradient-to-r from-navy-600 via-burgundy-600 to-navy-600"></div>
            <div className="w-4 h-4 bg-burgundy-600 rounded-full"></div>
          </div>
          <p className="text-navy-600 dark:text-sand-300 font-medium">
            From Fort Bragg to Ramstein and back home to forever
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DistanceStory;