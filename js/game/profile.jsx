import React from 'react';

const ProfileImage = ({ src, height, width }) => {
  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width
  };

  return (
    <div>
      <img src={src} alt="Profile" style={imageStyle} />
    </div>
  );
};

export default ProfileImage;
