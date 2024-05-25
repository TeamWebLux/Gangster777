import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// import responsiveModule from "./responsiveModule";

const RootComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(
  <RootComponent />,
  document.getElementById('root')
);

// reportWebVitals();
// responsiveModule();