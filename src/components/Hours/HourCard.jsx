import React from 'react';
import st from './Hours.module.css';

const HourCard = ({hora}) => {
    return (
        <div className={st.card}>
            <span className="card__title">{hora}</span>
        </div>
    )
};

export default HourCard;
