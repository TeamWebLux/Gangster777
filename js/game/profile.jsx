import React from 'react';

const ProfileImage = ({ height, width }) => {
  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width
  };

  return (
    <div>
      <img src="/gangster_assets/profile/profile-card.png" alt="Profile" style={imageStyle} />
    </div>
  );
};

export default ProfileImage;
