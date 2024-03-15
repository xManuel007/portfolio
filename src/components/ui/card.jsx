import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Card = ({ number, field }) => {
  const [numberCard, setNumberCard] = useState(0);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, x: 0 })

      const fillInterval = setInterval(() => {
        if (numberCard < number) {
          setNumberCard(prevPercent => prevPercent + 1);
        } else {
          clearInterval(fillInterval);
        }
      }, 20); // Adjust the interval duration as needed for smoother or faster filling

      return () => clearInterval(fillInterval);
    }
  }, [isInView, mainControls, number, numberCard])

  return (
    <motion.div
      ref={ref}
      animate={mainControls}
      initial={{ opacity: 0, x: '-20%' }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: .25
      }}
      className='w-36 h-36 lg:w-48 border-2 border-fronttext border-dashed rounded-lg p-4 relative m-5'>
      <div className='absolute top-2 left-4'>
        <span className='text-4xl text-fronttext font-bold'>{numberCard}</span>
        <span className='text-xl text-fronttext'>+</span>
      </div>
      <div className='grid grid-cols-2 gap-4 text-justify'>
        <span className='text-4xl text-fronttext font-bold'>__</span>
      </div>
      <div>
        <span className='text-sm text-white text-start flex'>{field}</span>
      </div>
    </motion.div>
  );
};

export default Card;
