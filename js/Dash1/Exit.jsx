import React from 'react';
import styled from 'styled-components';

// Styled component
const ExitContainer = styled.div`
    position: absolute;
    top: 10px; /* Adjust as needed */
    right: 10px; /* Adjust as needed */
    z-index: 1000; /* Ensure it is on top of other elements */
`;

const ExitImage = styled.img`
    width: 100px; /* Adjust size as needed */
    height: 100px; /* Adjust size as needed */
    cursor: pointer;
`;

const handleExitClick = () => {
    window.location.href = '/logout';
};

const Exit = () => {
    return (
        <ExitContainer>
            <ExitImage 
                src="/gangster_assets/dash1/profile/exit.png" 
                alt="Exit" 
                onClick={handleExitClick} 
            />
        </ExitContainer>
    );
};

export default Exit;
