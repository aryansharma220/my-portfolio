import React from 'react';
import './ApproachCard.css';

const Card = ({title,description}) => {
  return (
    <div className="approach-card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <strong style={{textAlign: 'center',padding: '1rem'}}>{title}</strong>
          </div>
        </div>

        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
              <p className="card-footer">
                {description}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
