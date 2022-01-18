import React from 'react';
import img from '../../assets/img/logo512.png'

import './style.pcss'

const Card = () => {
    return (
        <div className="card">
            <div className="card-title">
                TITLE
            </div>
            <div className="img">
                <img src={img} alt="img"/>
            </div>
            <p className="card-descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
    );
};

export default Card;