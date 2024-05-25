import React from 'react';
import '../css/cowboy.css'; // Import CSS file

const CowBoyCard = () => {
  return (
    <div className="cowboy-card">
      <div className="video-container">
        <video
          src="/gangster_assets/cards/cowboysgold.mp4" 
          autoPlay  // Autoplay the video
          muted    // Mute the video
          loop     // Loop the video
          className="video"
        />
        <div className="line"></div>
      </div>
    </div>
  );
};

export default CowBoyCard;
