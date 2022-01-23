import React, { useContext, useEffect, useState } from "react";
import CreateAppointment from "./components/Appointment/CreateAppointment";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import HoursContainer from "./components/Hours/HoursContainer";
import Month from "./components/Month/Month";
import GLOBAL_CONTEXT from "./context/GlobalContext";
import { getMonth } from "./helpers/utils";


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, fecha, hora } = useContext(GLOBAL_CONTEXT);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    
  }, [monthIndex]);
  

  return (
    <div className="App">
      <div className="vista">
        <h2>Dancing with Death</h2>
        <p>App for scheduling appointments to have a dance with Death</p>
        <CalendarHeader />
        <div className="container_row">
          <div>
            <Month month={currentMonth}/>
            <HoursContainer fecha={fecha}/>
          </div>
          <CreateAppointment fecha={fecha} hora={hora}/>
        </div>

      </div>
    </div>
  );
}

export default App;
