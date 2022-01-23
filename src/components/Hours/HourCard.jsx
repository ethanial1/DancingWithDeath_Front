import React, { useContext } from 'react';
import GLOBAL_CONTEXT from '../../context/GlobalContext';
import st from './Hours.module.css';

const HourCard = ({hora}) => {
    const { setHora } = useContext(GLOBAL_CONTEXT);

    return (
        <button className={st.card} onClick={() => setHora(hora)}>
            <span className="card__title">{hora}</span>
        </button>
    )
};

export default HourCard;
