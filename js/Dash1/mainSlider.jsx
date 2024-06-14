import React from 'react';
import CardSlider from './CardSlider';

const cards = [
    <div>Card 1 Content</div>,
    <div>Card 2 Content</div>,
    <div>Card 3 Content</div>,
    <div>Card 4 Content</div>,
    <div>Card 5 Content</div>
];

const App = () => {
    return (
        <div>
            <h1>Card Slider</h1>
            <CardSlider cards={cards} />
        </div>
    );
};

export default App;
