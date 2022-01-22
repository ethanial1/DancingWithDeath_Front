import React from "react";

const  GLOBAL_CONTEXT = React.createContext(
    {   
        date: "",
        monthIndex: 0,
        setMonthIndex: (index) => {},
        setDate: (date) => {}
    }
)


export default GLOBAL_CONTEXT;