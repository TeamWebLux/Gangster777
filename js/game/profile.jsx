import React from 'react';

const ProfileImage = () => {
  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 100,
    width: 100
  };

  return (
    <div>
      <img src="/gangster_assets/profile/profile-card.png" alt="Profile" style={imageStyle} />
    </div>
  );
};

export default ProfileImage;
