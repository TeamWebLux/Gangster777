import React, { Component } from 'react';
import '../css/dash1.css';

class BackgroundAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImageIndex: 0,
            backgroundImages: [
                '/gangster_assets/login_page_bg.png',
                '/gangster_assets/login_page_bg_car_light.png',
                '/gangster_assets/login_page_bg_home_light.png',
                '/gangster_assets/login_page_bg_light.png'
            ],
            imagesLoaded: false,
        };
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        this.loadImages();
        this.backgroundInterval = setInterval(this.changeBackground, 2500); // Change background every 2.5 seconds
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.backgroundInterval);
    }

    loadImages = () => {
        const { backgroundImages } = this.state;
        let imagesLoadedCount = 0;
        backgroundImages.forEach(src => {
            const img = new Image();
            img.onload = () => {
                if (this._isMounted) {
                    imagesLoadedCount++;
                    if (imagesLoadedCount === backgroundImages.length) {
                        this.setState({ imagesLoaded: true });
                    }
                }
            };
            img.src = src;
        });
    }

    changeBackground = () => {
        const { backgroundImages, backgroundImageIndex } = this.state;
        const newIndex = (backgroundImageIndex + 1) % backgroundImages.length;
        this.setState({ backgroundImageIndex: newIndex });
    }

    render() {
        const { backgroundImageIndex, backgroundImages, imagesLoaded } = this.state;
        const backgroundImage = backgroundImages[backgroundImageIndex];
        return (
            <div>
                {!imagesLoaded && (
                    <div className="preloader">
                        <div className="preloader-text">Loading...</div>
                    </div>
                )}
                {imagesLoaded && (
                    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    </div>
                )}
            </div>
        )
    }
}

export default BackgroundAnimation;
