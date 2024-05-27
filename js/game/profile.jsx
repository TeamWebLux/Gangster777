import React, { useState } from 'react';
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
  cursor: pointer;
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
  top: 55%;
  font-size: 25px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Balance = styled(Text)`
  top: 30%;
  left: 25%;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background: #333;
  color: gold;
  border: 2px solid gold;
  z-index: 1000;
  padding: 20px;
  box-shadow: 0 0 10px gold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #222;
  color: gold;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 0 0 5px gold, 0 0 10px gold, 0 0 15px gold;

  &:hover {
    background: #555;
  }
`;

const ProfileImage = ({ username, balance }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <Image src="/gangster_assets/profile/profile-card.png" alt="Profile" onClick={handleImageClick} />
        <Username>{username}</Username>
        <Balance>${balance}</Balance>
      </Container>
      {isModalOpen && (
        <Modal>
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          <h2>Gangster Themed Content</h2>
          <p>This is the content inside the modal window.</p>
        </Modal>
      )}
    </>
  );
};

export default ProfileImage;
