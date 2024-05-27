import React from 'react';

const ProfileImage = ({ username, balance }) => {
  const containerStyle = {
    position: 'absolute',  // Make sure the container is absolutely positioned
    top: 0,
    left: 0,
    width: '160px',
    height: 'auto'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto'
  };

  const textStyle = {
    position: 'absolute',
    color: 'gold',
    textShadow: '0 0 5px gold, 0 0 10px gold, 0 0 15px gold',
    fontFamily: '"Courier New", Courier, monospace', // Replace this with a gangster-themed font if you have one
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
  };

  const usernameStyle = {
    ...textStyle,
    top: '10%',
    fontSize: '14px'
  };

  const balanceStyle = {
    ...textStyle,
    bottom: '10%',
    fontSize: '12px'
  };

  return (
    <div style={containerStyle}>
      <img src="/gangster_assets/profile/profile-card.png" alt="Profile" style={imageStyle} />
      <div style={usernameStyle}>{username}</div>
      <div style={balanceStyle}>${balance}</div>
    </div>
  );
};

export default ProfileImage;
