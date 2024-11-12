'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ShopSidebar() {
  // State for category selection
  const [selectedCategory, setSelectedCategory] = useState(null);
  // State for price filter
  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'];

  // Handle category selection
  const handleCategorySelect = (category:any) => {
    setSelectedCategory(category);
  };

  // Handle price range change
  const handlePriceChange = (event:any) => {
    setPriceRange(event.target.value.split(',').map(Number));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 1.5 },
        ease: 'easeInOut',
      }}
      className="p-4 dark:bg-slate-600/25 bg-gray-100 shadow-lg rounded-lg w-64"
    >
      {/* Sidebar Header */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-[12px] font-semibold mb-4"
      >
        Products Categories
      </motion.h2>

      {/* Categories List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mb-6"
      >
        <h3 className="font-semibold text-[12px] mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategorySelect(category)}
              className={`cursor-pointer text-[12px] p-2 rounded-md ${
                selectedCategory === category ? 'bg-sky-700 text-white' : 'bg-white text-gray-700'
              } transition duration-300`}
            >
              {category}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Price Range Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6"
      >
        <h3 className="font-semibold text-[12px] mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full mb-4"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
