import React from "react";

const  GLOBAL_CONTEXT = React.createContext(
    {   
        fecha: {},
        hora: "",
        monthIndex: 0,
        setMonthIndex: (index) => {},
        setFecha: (date) => {},
        setHora: (hora) => {}
    }
)


export default GLOBAL_CONTEXT;