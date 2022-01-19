import React from 'react';
import img from '../../assets/img/logo512.png'

import './style.pcss'
import Button from "./Components/Button";

const Card = () => {
    return (
        <div className="card">
            <div className="card-title">
                TITLE
            </div>
            <div className="img">
                <img src={img} alt="img"/>
            </div>
            <Button text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
        </div>
    );
};

export default Card;