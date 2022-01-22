import React from 'react';
import dayjs from 'dayjs';

const Day = ({day}) => {

    const getCurrentDay = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'current_day' : '';
    }

    const setDateSelected = () => {}

    return (
        <div>
            <button onClick={setDateSelected}>
                <span className={`${getCurrentDay()}`} >{day.format("DD")}</span>
            </button>
        </div>
    )
};

export default Day;
