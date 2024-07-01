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
      className="p-2 mb-4 rounded-lg bg-[#010409]">
      <time className="text-lg font-semibold text-white">{year}</time>
      <ol className="mt-3 divide-y divide-gray-700">
        {children}
      </ol>
    </motion.div>
  )
}

export default TimelineContainer
