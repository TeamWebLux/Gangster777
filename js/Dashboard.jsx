import React, { useState, useEffect, useRef } from 'react';
// import GameComponent from './game/game';
import './css/Dashboard.css';
import CowBoyCard from './cowboysGold/cowboy';
import Slider from './game/slider';
import ProfileImage from './game/profile';
const Dashboard = ({ message }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    // Check if the video has been viewed
    const videoViewed = localStorage.getItem('videoViewed');
    if (!videoViewed) {
      setShowVideo(true);
    }

    // Autoplay the video if it should be shown
    if (!videoViewed && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleVideoEnd = () => {
    localStorage.setItem('videoViewed', 'true');
    setShowVideo(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/logout';
  };

  return (
    <div className="dashboard-container">
      // <h1 style={{ color: 'white' }}>{message}</h1>
      <img
  src="/gangster_assets/exit_btn.png" 
  alt="Logout"
  onClick={handleLogout}
 style={{
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px', 
    height: 'auto',
    cursor: 'pointer',
    marginTop: '20px', 
    marginRight: '20px' 
  }}
/>
<ProfileImage />
<CowBoyCard />
<Slider />
      <div>
        {showVideo && (
          <div className="video-overlay">
            <video
              ref={videoRef}
              autoPlay
              muted
              onEnded={handleVideoEnd}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/gangster_assets/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
