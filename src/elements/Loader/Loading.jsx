import React from 'react';
import './Loading.css'; // Optional: create a CSS file for styles

const Loading = () => {
  return (
    <div className="loaderStyle">
      <div className="orbital">
        <div className="ringOne"></div>
        <div className="ringTwo"></div>
        <div className="ringThree"></div>
        <div className="core"></div>
        <div className="spin"></div>
      </div>
      <div className="loader">
        <span className="loader-text">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
