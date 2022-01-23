import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import GLOBAL_CONTEXT from '../../context/GlobalContext';

const Day = ({day}) => {

    const [disabled, setDisabled] = useState(false);
    const { setFecha } = useContext(GLOBAL_CONTEXT);

    const dayOfWeek = day.get("day");

    useEffect(() => {
        if(dayOfWeek === 0 || dayOfWeek === 6) {
            setDisabled(true)
        }
    }, []);
    

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
            <button onClick={setDateSelected} disabled={disabled}>
                <span className={`${getCurrentDay()}`} >{day.format("DD")}</span>
            </button>
        </div>
    )
};

export default Day;
