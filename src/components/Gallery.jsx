import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight, FiHeart } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop",
      category: "letters",
      title: "Love Letters",
      description: "Every letter was a piece of our hearts crossing the ocean"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      category: "calls",
      title: "Video Calls",
      description: "Late night calls that made the distance disappear"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=800&fit=crop",
      category: "reunion",
      title: "The Reunion",
      description: "The moment that made everything worth it"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "deployment",
      title: "Deployment Days",
      description: "Serving our country while missing each other"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
      category: "memories",
      title: "Sunset Memories",
      description: "Every sunset brought us one day closer"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      category: "proposal",
      title: "The Proposal",
      description: "When you got down on one knee at the airport"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=800&fit=crop",
      category: "travel",
      title: "Journey Together",
      description: "Finally traveling the world as one"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      category: "home",
      title: "Home Sweet Home",
      description: "Building our life together at last"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'letters', name: 'Letters', count: galleryImages.filter(img => img.category === 'letters').length },
    { id: 'calls', name: 'Video Calls', count: galleryImages.filter(img => img.category === 'calls').length },
    { id: 'reunion', name: 'Reunion', count: galleryImages.filter(img => img.category === 'reunion').length },
    { id: 'memories', name: 'Memories', count: galleryImages.filter(img => img.category === 'memories').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-sand-100 mb-4">
            Our Journey in Photos
          </h2>
          <p className="text-xl text-navy-600 dark:text-sand-300 max-w-3xl mx-auto">
            Screenshots, letters, and memories that kept us connected across the miles
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-burgundy-600 text-white shadow-lg'
                  : 'bg-sand-100 dark:bg-navy-700 text-navy-700 dark:text-sand-200 hover:bg-sand-200 dark:hover:bg-navy-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-sand-200">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-burgundy-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <SafeIcon icon={FiHeart} className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiX} className="h-6 w-6" />
                </button>

                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="h-6 w-6" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                  <h3 className="font-semibold text-xl mb-2">{selectedImage.title}</h3>
                  <p className="text-sand-200">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;