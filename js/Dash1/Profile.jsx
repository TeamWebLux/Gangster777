import React from 'react';
import styled from 'styled-components';

// Styled components
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 10px;
`;

const ProfileAvatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProfileName = styled.h2`
    margin: 0;
    font-size: 1.5em;
`;

const ProfileEmail = styled.p`
    margin: 0;
    color: #666;
`;

const Profile = ({ username, email, avatar }) => {
    return (
        <ProfileContainer>
            <ProfileAvatar src={avatar} alt="Avatar" />
            <ProfileDetails>
                <ProfileName>{username}</ProfileName>
                <ProfileEmail>{email}</ProfileEmail>
            </ProfileDetails>
        </ProfileContainer>
    );
};

export default Profile;
