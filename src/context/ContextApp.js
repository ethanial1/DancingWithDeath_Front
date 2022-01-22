import React, { useState } from 'react';
import GLOBAL_CONTEXT from './GlobalContext';
import dayjs from 'dayjs';

const ContextApp = (props) => {

    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    return (
        <GLOBAL_CONTEXT.Provider value={{monthIndex, setMonthIndex}}>
            {props.children}
        </GLOBAL_CONTEXT.Provider>
    )
};

export default ContextApp;
