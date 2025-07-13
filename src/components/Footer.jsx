import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;
const { BsGlobe } = BsIcons;

const Footer = () => {
  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Wedding Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiHeart} className="h-6 w-6 mr-2 text-burgundy-400" />
              Sarah & Michael
            </h3>
            <p className="text-sand-200 mb-4">
              After 3 years of long-distance love, we're finally saying "I do" surrounded by family and friends.
            </p>
            <div className="flex items-center space-x-2 text-sand-300">
              <SafeIcon icon={FiMapPin} className="h-4 w-4" />
              <span>Fort Bragg, North Carolina</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#story" className="text-sand-200 hover:text-burgundy-400 transition-colors">Our Story</a></li>
              <li><a href="#gallery" className="text-sand-200 hover:text-burgundy-400 transition-colors">Gallery</a></li>
              <li><a href="#timeline" className="text-sand-200 hover:text-burgundy-400 transition-colors">Timeline</a></li>
              <li><a href="#rsvp" className="text-sand-200 hover:text-burgundy-400 transition-colors">RSVP</a></li>
              <li><a href="#registry" className="text-sand-200 hover:text-burgundy-400 transition-colors">Registry</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="h-4 w-4 text-burgundy-400" />
                <span className="text-sand-200">sarah.michael.wedding@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="h-4 w-4 text-burgundy-400" />
                <span className="text-sand-200">(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Important Dates</h4>
            <div className="space-y-3">
              <div>
                <div className="font-medium text-burgundy-400">RSVP Deadline</div>
                <div className="text-sand-200">May 1, 2024</div>
              </div>
              <div>
                <div className="font-medium text-burgundy-400">Wedding Day</div>
                <div className="text-sand-200">June 15, 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Mission Statement */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sand-200 italic">
                "Distance means nothing when someone means everything"
              </p>
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <SafeIcon icon={BsGlobe} className="h-6 w-6 text-burgundy-400" />
              <span className="font-serif font-semibold text-lg">Through It All</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-sand-300 text-sm">
            Through It All – A Reunion Wedding Template by{' '}
            <span className="text-burgundy-400 font-medium">Mrake Agency</span>
          </p>
          <p className="text-sand-400 text-xs mt-2">
            Celebrating love that endures distance, time zones, and separation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;