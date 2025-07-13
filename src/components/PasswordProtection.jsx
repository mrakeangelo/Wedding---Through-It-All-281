import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiEye, FiEyeOff } = FiIcons;
const { BsGlobe } = BsIcons;

const PasswordProtection = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = 'ForeverTogether2024';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onAuthenticate();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-navy-800 rounded-lg shadow-xl p-8 max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <SafeIcon icon={BsGlobe} className="h-8 w-8 text-burgundy-600" />
            <h1 className="font-serif text-2xl font-bold text-navy-800 dark:text-sand-100">
              Through It All
            </h1>
          </motion.div>
          <h2 className="text-lg text-navy-600 dark:text-sand-300 mb-2">
            Sarah & Michael's Wedding
          </h2>
          <p className="text-sm text-navy-500 dark:text-sand-400">
            This is a private wedding website
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-navy-700 dark:text-sand-200 mb-2">
              Enter Password
            </label>
            <div className="relative">
              <SafeIcon icon={FiLock} className="absolute left-3 top-3 h-5 w-5 text-navy-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-sand-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white dark:bg-navy-700 text-navy-700 dark:text-sand-200"
                placeholder="Enter the wedding password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-navy-400 hover:text-navy-600 dark:hover:text-sand-200"
              >
                <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="h-5 w-5" />
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-burgundy-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-burgundy-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enter Wedding Site
          </motion.button>
        </form>

        {/* Hint */}
        <div className="mt-6 text-center">
          <p className="text-xs text-navy-500 dark:text-sand-400">
            Don't have the password? Contact the couple for access.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-navy-400 dark:text-sand-500">
            A Reunion Wedding Template by Mrake Agency
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordProtection;