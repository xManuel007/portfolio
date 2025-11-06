import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Card = ({ number, field }) => {
  const [numberCard, setNumberCard] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, y: 0 })

      const fillInterval = setInterval(() => {
        setNumberCard((prev) => {
          if (prev < number) return prev + 1
          clearInterval(fillInterval)
          return prev
        })
      }, 20)
      return () => clearInterval(fillInterval)
    }
  }, [isInView, mainControls, number])

  return (
    <motion.div
      ref={ref}
      animate={mainControls}
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
      className="relative flex flex-col justify-between w-40 h-40 lg:w-48 rounded-xl p-5 m-4
                 bg-[#161b22] border border-[#30363d] shadow-[0_0_15px_rgba(0,0,0,0.3)]
                 hover:shadow-[0_0_20px_rgba(88,166,255,0.3)]
                 hover:border-[#58a6ff] transition-all duration-300"
    >
      {/* Número */}
      <div className="flex items-center gap-1">
        <span className="text-4xl text-[#58a6ff] font-mono font-bold tracking-tight">
          {numberCard}
        </span>
        <span className="text-lg text-[#8b949e] font-mono">+</span>
      </div>

      {/* Divider estilo consola */}
      <div className="h-[1px] w-full bg-[#30363d] my-2" />

      {/* Campo o descripción */}
      <div className="text-sm text-[#c9d1d9] font-mono uppercase tracking-wide opacity-90">
        {field}
      </div>
    </motion.div>
  )
}

export default Card
