import React, { Component } from 'react';
import '../css/dash1.css';
import Profile from '../Dash1/Profile'; // Import the Profile component
import Exit from '../Dash1/Exit'; // Import the Profile component
import mainSlider from '../Dash1/mainSlider';  // Import the Profile component

class Dashboard1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImageIndex: 0,
            backgroundImages: [
                '/gangster_assets/dash1/bg.webp',
                // '/gangster_assets/dash1/bg1.png',
                // '/gangster_assets/dash1/bg2.png',
                // '/gangster_assets/dash1/bg3.png'
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
                    <>
                    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    </div>
                    <div>

                        <Profile 
                        name="Gangster777" 
                        balance="1000" 
                        backgroundImage="/gangster_assets/dash1/profile/profile_bar.png" 
                        />
                    </div>

                        <div>
                            <Exit />
                        </div>

                        <div>
                        <mainSlider />
                        </div>
                    </>
                )}
            </div>
        )
    }
}

export default Dashboard1;
