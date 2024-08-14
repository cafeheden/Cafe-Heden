import React from 'react';
import './BouncingBalls.css'; // Import the CSS file with animation

const BouncingBalls = () => {
  return (
    <div className="bouncing-balls flex justify-center items-center space-x-2">
      <span className="ball bg-redHighlight"></span>
      <span className="ball bg-yellowHighlight"></span>
      <span className="ball bg-greenHighlight"></span>
    </div>
  );
};

export default BouncingBalls;
