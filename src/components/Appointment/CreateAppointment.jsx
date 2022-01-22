import React, { useState } from 'react';
import st from './Appointment.module.css'

const CreateAppointment = () => {

  const [form, setForm] = useState({fecha: "", hora: "", contacto: ""});

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

  const handleSumbit = (e) => {
    e.preventDefault();

    if(!form.artist || !form.song) {
        alert("Datos incompletos")
        return;
    }

    setForm({fecha: "", hora: "", contacto: ""});
  }

  return (
    <div className={st.box}>
      <h3>New Appointment</h3>
      <form>
        <div>
          <label htmlFor="fecha">Date</label>
          <input type="date" id='fecha' name='fecha'/>
        </div>
        <div>
          <label htmlFor="hora">Hour</label>
         <input type="text" name="hour" id="hour" />
        </div>
        <div>
          <label htmlFor="contacto">Contacto</label>
          <input type="text" name="contacto" id="contacto" />
        </div>
        <input type="submit" value="Save" className={st.btn}/>
      </form>
    </div>
  )
};

export default CreateAppointment;
