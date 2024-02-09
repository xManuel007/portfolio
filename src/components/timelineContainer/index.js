import React from 'react'
import { motion } from "framer-motion";

const TimelineContainer = ({ children, year }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '20%' }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <time className="text-lg font-semibold text-gray-900 dark:text-white">{year}</time>
      <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        {children}
      </ol>
    </motion.div>
  )
}

export default TimelineContainer
