import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { ExternalLink } from 'lucide-react'

const InfoItem = ({ label, value, className, isExternaLink }) => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 })
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      animate={mainControls}
      initial={{ opacity: 0, x: '-10%' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex mb-1 gap-2 items-center"
    >
      <span className="text-xl text-[#8b949e] w-28">{label}:</span>
      <span className={`${className} text-xl text-[#c9d1d9] break-all`}>
        {isExternaLink ? (
          <a
            href={isExternaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 items-center hover:text-[#58a6ff] transition-colors duration-200"
          >
            {value}
            <ExternalLink size={15} color="#58a6ff" />
          </a>
        ) : (
          value
        )}
      </span>
    </motion.div>
  )
};

export default InfoItem
