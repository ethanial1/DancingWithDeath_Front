import React, { useContext } from 'react';
import dayjs from 'dayjs';
import GLOBAL_CONTEXT from '../../context/GlobalContext';
import st from './CalendarHeader.module.css';

const CalendarHeader = () => {

    const { monthIndex, setMonthIndex } = useContext(GLOBAL_CONTEXT);

    const handlePrevMonth = () => setMonthIndex(monthIndex - 1);

    const handleNextMonth = () => setMonthIndex(monthIndex + 1);

    const handleReset = () => setMonthIndex(dayjs().month());

    return (
        <header>
            <h1>Calendar</h1>
            <button onClick={handleReset}>
                <span>Today</span>
            </button>
            <button onClick={handlePrevMonth}>
                <span className='material-icons-outlined'>chevron_left </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className='material-icons-outlined'>chevron_right </span>
            </button>
            <h2>
                {dayjs(new Date()).format("MMMM YYYY")}
            </h2>
        </header>
    )
};

export default CalendarHeader;
