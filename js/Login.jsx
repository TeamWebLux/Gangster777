import React, { Component } from 'react';
import { post } from './api/server';
import './css/LoginWin.css'; 

class LoginWin extends Component {
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
            username: '',
            password: '',
            rememberMe: true
        };
        this._isMounted = false;
        this.loadRememberMeSettings();
    }

    componentDidMount() {
        this._isMounted = true;
        this.loadImages();
        this.backgroundInterval = setInterval(this.changeBackground, 5000); // Change background every 5 seconds
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

    loadRememberMeSettings = () => {
        const remember = window.localStorage.getItem('is_remember');
        if (remember === undefined) {
            window.localStorage.setItem('is_remember', '1');
        } else {
            if (remember === '1') {
                const mem_username = window.localStorage.getItem('username') || '';
                const mem_password = window.localStorage.getItem('password') || '';
                this.setState({ username: mem_username, password: mem_password });
            } else {
                this.setState({ rememberMe: false });
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleRememberMe = () => {
        const rememberMe = !this.state.rememberMe;
        this.setState({ rememberMe });
        window.localStorage.setItem('is_remember', rememberMe ? '1' : '0');
    }

    handleSubmit = () => {
        const { username, password, rememberMe } = this.state;
        if (rememberMe) {
            window.localStorage.setItem('username', username);
            window.localStorage.setItem('password', password);
        }
        const token = document.getElementById('root').getAttribute('token');
        post('/login', { username, password, _token: token }).then(() => {
            // console.log("Hello")
        }).catch(error => {
            console.error('Login failed:', error);
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
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
                    <div className="preloader-container">
    <div className="preloader" style={{ backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="%23000000" stroke-width="19" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.9" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>')`, width: `${yourWidth}px`, height: `${yourHeight}px` }}>
        Loading...
    </div>
</div>

                )}
                {imagesLoaded && (
                    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className="login-form">
                            <div className="our-input-fields">
                                <input 
                                    id="username" 
                                    className="login-input" 
                                    type="text" 
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.handleChange} 
                                    onKeyPress={this.handleKeyPress} 
                                />
                                <input 
                                    id="password" 
                                    className="login-input" 
                                    type="password" 
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.handleChange} 
                                    onKeyPress={this.handleKeyPress} 
                                />
                                <div className="remember-me">
                                    <input 
                                        id="rememberMe" 
                                        type="checkbox" 
                                        checked={this.state.rememberMe}
                                        onChange={this.handleRememberMe} 
                                    />
                                    <label htmlFor="rememberMe">Remember Me</label>
                                </div>
                              <img
    className="login-button"
    src="/gangster_assets/login-btn.png"
    alt="Login"
    onClick={this.handleSubmit}
    style={{ width: '180px', height: '120px' }}
/>


                                 </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default LoginWin;
