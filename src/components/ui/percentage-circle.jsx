import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PercentageCircle = ({ percent, skill }) => {
  const [filledPercent, setFilledPercent] = useState(0);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible')

      const fillInterval = setInterval(() => {
        if (filledPercent < percent) {
          setFilledPercent(prevPercent => prevPercent + 1);
        } else {
          clearInterval(fillInterval);
        }
      }, 10); // Adjust the interval duration as needed for smoother or faster filling

      return () => clearInterval(fillInterval);
    }
  }, [percent, filledPercent, isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={mainControls}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: .25
      }}
      className='flex flex-col items-center gap-2'
    >
      <CircularProgressbar value={filledPercent} text={`${filledPercent}%`} className='h-32' />
      <div className='text-fronttext'>
        {skill}
      </div>
    </motion.div>
  );
};

export default PercentageCircle;
