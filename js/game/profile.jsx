import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

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

const ClickableArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
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
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('/gangster_assets/profile/Profile.webp') no-repeat center center fixed;
  background-size: cover;
  color: gold;
  border: 2px solid gold;
  z-index: 1000;
  padding: 20px;
  box-shadow: 0 0 10px gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.5s ease-in-out;
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

  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Container>
        <ClickableArea onClick={handleImageClick}>
          <Image src="/gangster_assets/profile/profile-card.png" alt="Profile" />
          <Username>{username}</Username>
          <Balance>${balance}</Balance>
        </ClickableArea>
      </Container>
      {isModalOpen && (
        <Modal>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#000000",
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true,
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          <h2>Gangster Themed Content</h2>
          <p>This is the content inside the modal window.</p>
        </Modal>
      )}
    </>
  );
};

export default ProfileImage;
