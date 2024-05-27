import React from 'react';

const ProfileImage = () => {
  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100px',
    width: '100px'  
  };

  return (
    <div>
      <img src="/gangster_assets/profile/profile-card.png" alt="Profile" style={imageStyle} />
    </div>
  );
};

export default ProfileImage;
