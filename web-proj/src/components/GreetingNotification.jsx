import React, { useState, useEffect } from 'react';
import './GreetingNotification.css';

const GreetingNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show after a short delay for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Wait for the exit animation to finish
  };

  const getGreetingData = () => {
    const hour = new Date().getHours();
    
    // Morning: 5 AM to 11:59 AM
    if (hour >= 5 && hour < 12) {
      return { title: 'Good Morning!', text: 'Wishing you a wonderful start to your day.', emoji: '🌅', animClass: 'wave', themeClass: 'theme-morning' };
    } 
    // Afternoon: 12 PM to 4:59 PM
    else if (hour >= 12 && hour < 17) {
      return { title: 'Good Afternoon!', text: 'Hope your day is going great.', emoji: '☀️', animClass: 'wave', themeClass: 'theme-afternoon' };
    } 
    // Evening: 5 PM to 10:59 PM
    else if (hour >= 17 && hour < 23) {
      return { title: 'Good Evening!', text: 'Thanks for stopping by this evening.', emoji: '🌙', animClass: 'wave', themeClass: 'theme-evening' };
    } 
    // Midnight / Late Night: 11 PM to 4:59 AM
    else {
      return { title: 'Boo! 👻', text: 'Late night browsing? Welcome to the graveyard shift!', emoji: '👻', animClass: 'float', themeClass: 'theme-ghost' };
    }
  };

  if (!isVisible && !isClosing) return null;

  const { title, text, emoji, animClass, themeClass } = getGreetingData();

  return (
    <div className={`greeting-notification ${themeClass} ${isClosing ? 'slide-out' : 'slide-in'}`}>
      <div className="greeting-content">
        <div className="greeting-avatar">
          <span className={animClass} role="img" aria-label="greeting emoji">{emoji}</span>
        </div>
        <div className="greeting-text">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <button className="greeting-close" onClick={handleClose} aria-label="Close notification">
          &times;
        </button>
      </div>
    </div>
  );
};

export default GreetingNotification;
