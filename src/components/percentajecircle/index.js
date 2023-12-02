import React, { useState, useEffect } from 'react';

const PercentageCircle = ({ percent, skill }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const startAngle = -Math.PI / 2;
  const targetOffset = circumference - (percent / 100) * circumference;

  // Utilizamos el estado para controlar el valor de strokeDashoffset
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

  // Utilizamos useEffect para iniciar la animación al montar el componente
  useEffect(() => {
    const animationDuration = 1000; // Duración de la animación en milisegundos
    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / animationDuration, 1);
      const currentOffset = circumference * (1 - progress) + targetOffset;

      setStrokeDashoffset(currentOffset);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    // Limpia el temporizador cuando el componente se desmonta
    return () => cancelAnimationFrame(animate);
  }, [circumference, targetOffset]);

  return (
    <div className='flex flex-col'>
      <svg height="100" width="100">
        {/* Círculo exterior */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#ddd"
          strokeWidth="8"
        />
        {/* Círculo interior */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#247CAC"
          strokeWidth="8"
          strokeDasharray={circumference}
          transform={`rotate(${startAngle * (180 / Math.PI)} 50 50)`}
          strokeDashoffset={strokeDashoffset}
        />
        <text x="50" y="50" textAnchor="middle" dy="7" fontSize="16" fill="#9BBEC8">
          {percent}%
        </text>
      </svg>
      <div className='text-fronttext'>
        {skill}
      </div>
    </div>
  );
};

export default PercentageCircle;
