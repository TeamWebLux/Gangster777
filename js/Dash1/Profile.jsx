import React from 'react';
import styled from 'styled-components';

// Styled components
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 10px;
    border-radius: 10px;
    z-index: 1000; /* Ensure it is on top of other elements */
    background-size: cover;
    background-repeat: no-repeat;
    color: white; /* Text color to stand out against the background */
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-shadow: 1px 1px 2px black; /* Optional: add a text shadow for better readability */
`;

const ProfileName = styled.h2`
    margin: 0;
    font-size: 1.5em;
`;

const ProfileBalance = styled.p`
    margin: 0;
`;

const Profile = ({ name, balance, backgroundImage }) => {
    return (
        <ProfileContainer style={{ backgroundImage: `url(${backgroundImage})`, width: '250px' }}>
            <ProfileDetails>
                <ProfileName>{name}</ProfileName>
                <ProfileBalance>Balance: ${balance}</ProfileBalance>
            </ProfileDetails>
        </ProfileContainer>
    );
};

export default Profile;
