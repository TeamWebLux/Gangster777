import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: auto;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.div`
  position: absolute;
  color: gold;
  text-shadow: 0 0 5px gold, 0 0 10px gold, 0 0 15px gold;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const Username = styled(Text)`
  top: 10%;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Balance = styled(Text)`
  bottom: 10%;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ProfileImage = ({ username, balance }) => {
  return (
    <Container>
      <Image src="/gangster_assets/profile/profile-card.png" alt="Profile" />
      <Username>{username}</Username>
      <Balance>${balance}</Balance>
    </Container>
  );
};

export default ProfileImage;
