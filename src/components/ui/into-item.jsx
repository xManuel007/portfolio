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
    <div>
      <motion.div
        ref={ref}
        animate={mainControls}
        initial={{ opacity: 0, x: '-20%' }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: .25
        }}
        className=' flex mb-2 gap-2'>
        <span className='text-lg text-slate-400'>{label}:</span>
        <span className={`${className} text-lg text-slate-200 `}>
          {isExternaLink ?
            <a
              href={isExternaLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-row gap-1 items-center hover:opacity-70 duration-200'>
              {value}
              <ExternalLink color='white' size={20} />
            </a>
            : value}
        </span>
      </motion.div>
    </div>
  )
};

export default InfoItem
