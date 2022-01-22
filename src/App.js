import React, { useContext, useEffect, useState } from "react";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import Month from "./components/Month/Month";
import GLOBAL_CONTEXT from "./context/GlobalContext";
import { getMonth } from "./helpers/utils";


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, date } = useContext(GLOBAL_CONTEXT);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    
  }, [monthIndex]);
  

  return (
    <div className="App">
      <div>
        <CalendarHeader />
        <div>
          <Month month={currentMonth}/>
        </div>
      </div>
    </div>
  );
}

export default App;
