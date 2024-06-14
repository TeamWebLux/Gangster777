import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const SliderContainer = styled.div`
    position: relative;
    width: 80%;
    margin: auto;
    overflow: hidden;
`;

const SliderWrapper = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    transform: ${props => `translateX(-${props.translate}%)`};
`;

const Card = styled.div`
    min-width: 20%;
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
`;

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    ${props => (props.direction === 'left' ? 'left: 10px' : 'right: 10px')};
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
`;

const CardSlider = ({ cards }) => {
    const [index, setIndex] = useState(0);
    const cardWidth = 100 / cards.length;
    
    const handlePrev = () => {
        setIndex(index === 0 ? cards.length - 1 : index - 1);
    };

    const handleNext = () => {
        setIndex(index === cards.length - 1 ? 0 : index + 1);
    };

    return (
        <SliderContainer>
            <Arrow direction="left" onClick={handlePrev}>
                &#9664;
            </Arrow>
            <SliderWrapper translate={index * cardWidth}>
                {cards.map((card, idx) => (
                    <Card key={idx}>
                        {card}
                    </Card>
                ))}
            </SliderWrapper>
            <Arrow direction="right" onClick={handleNext}>
                &#9654;
            </Arrow>
        </SliderContainer>
    );
};

export default CardSlider;
