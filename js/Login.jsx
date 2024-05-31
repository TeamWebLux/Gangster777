import React, { Component } from 'react';
import { post } from './api/server';
import './css/Login.css';

class LoginWin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoUrl: '/magicslot_asset/Preloader_assets/preloaderv.mp4', // Add your video URL here
            username: '',
            password: '',
            rememberMe: true,
            videoLoaded: false // Track video loading status
        };
        this._isMounted = false;
        this.loadRememberMeSettings();
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
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

    handleVideoLoaded = () => {
        this.setState({ videoLoaded: true });
    }

    render() {
        const { videoUrl, username, password, rememberMe, videoLoaded } = this.state;

        return (
            <div className="login-page" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                {!videoLoaded && (
                    <div className="preloader">
                        Loading...
                    </div>
                )}
                <video 
                    autoPlay 
                    muted 
                    loop 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    onLoadedData={this.handleVideoLoaded}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="login-form" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Your login form elements go here */}
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        placeholder="Password"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => this.setState({ rememberMe: e.target.checked })}
                        />
                        Remember Me
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginWin;
