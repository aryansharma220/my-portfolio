import React from 'react';
import './Loading.css';

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
    </div>
  );
};

export default Loading;
