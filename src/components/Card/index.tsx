import React from 'react';
import img from '../../assets/img/logo512.png'

import './Card.module.css'

import styles from './Card.module.css'

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                TITLE
            </div>
            <div className={styles.img}>
                <img src={img} alt="img"/>
            </div>
            <p className={styles.cardDescr}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
    );
};

export default Card;