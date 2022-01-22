import React, { useContext } from 'react';
import dayjs from 'dayjs';
import GLOBAL_CONTEXT from '../../context/GlobalContext';

const Day = ({day}) => {

    const { setFecha } = useContext(GLOBAL_CONTEXT);

    const getCurrentDay = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'current_day' : '';
    }

    const setDateSelected = () => {
        setFecha({
            month: day.get('month') + 1,
            day: day.get('date'),
            year: day.get('year')
        })
    }

    return (
        <div>
            <button onClick={setDateSelected}>
                <span className={`${getCurrentDay()}`} >{day.format("DD")}</span>
            </button>
        </div>
    )
};

export default Day;
