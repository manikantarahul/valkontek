import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetValue, text, duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // adjust based on when you want to trigger
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let frameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const progress = Math.min(1, elapsed / duration);
      const nextValue = Math.floor(progress * targetValue);

      setCurrentValue(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCount);
      }
    };

    frameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(frameId);
  }, [isVisible, targetValue, duration]);

  const formattedValue = currentValue.toLocaleString();

  return (
    <h4 ref={counterRef}>
      {formattedValue}
      <span>{text}</span>
    </h4>
  );
};

export default Counter;
