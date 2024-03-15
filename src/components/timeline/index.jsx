import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";


const TimelineContainer = ({ children, year }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, mainControls])
  return (
    <motion.div
    ref={ref}
      initial={{ opacity: 0, y: '20%' }}
      animate={mainControls}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: .25
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
