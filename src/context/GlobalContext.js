import React from "react";

const  GLOBAL_CONTEXT = React.createContext(
    {   
        fecha: {},
        monthIndex: 0,
        setMonthIndex: (index) => {},
        setFecha: (date) => {}
    }
)


export default GLOBAL_CONTEXT;