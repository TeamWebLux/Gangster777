import React from 'react';
import styled from 'styled-components';

// Styled components
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -30px;
    left: -15px;
    border-radius: 10px;
    z-index: 1000; /* Ensure it is on top of other elements */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white; /* Text color to stand out against the background */
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-shadow: 1px 1px 2px black; /* Optional: add a text shadow for better readability */
    padding: 10px;
    border-radius: 10px;
    position: relative; /* Required for absolute positioning inside */
`;

const ProfileName = styled.h2`
    margin: 0;
    font-size: 1.5em;
    position: relative;
    top: 10px; /* Adjust this value to position vertically */
    left: 10px; /* Adjust this value to position horizontally */
`;

const ProfileBalance = styled.p`
    margin: 0;
    position: relative;
    bottom: 10px; /* Adjust this value to position vertically */
    right: 10px; /* Adjust this value to position horizontally */
`;

const Profile = ({ name, balance, backgroundImage }) => {
    return (
        <ProfileContainer style={{ backgroundImage: `url(${backgroundImage})`, width: '300px', height: '200px' }}>
            <ProfileDetails>
                <ProfileName>{name}</ProfileName>
                <ProfileBalance>Balance: ${balance}</ProfileBalance>
            </ProfileDetails>
        </ProfileContainer>
    );
};

export default Profile;
