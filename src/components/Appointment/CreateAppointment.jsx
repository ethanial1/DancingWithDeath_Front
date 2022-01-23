import React, { useEffect, useState, useContext } from 'react';
import GLOBAL_CONTEXT from '../../context/GlobalContext';
import st from './Appointment.module.css'

const CreateAppointment = ({fecha, hora}) => {
  const [form, setForm] = useState({fecha: "", formatDate: "", hora: "", contacto: ""});
  const { setFecha, setHora } = useContext(GLOBAL_CONTEXT);

  useEffect(() => {
    fecha.hasOwnProperty("year") && setForm(
      {
        ...form, 
        fecha: new Date(fecha.year, fecha.month-1, fecha.day).toDateString(), 
        formatDate: `${fecha.year}-${fecha.month}-${fecha.day}`,
        hora: hora
      })
  }, [fecha, hora]);

  console.log("format ",form.formatDate)
  

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const addAppointment = () => {
    fetch("https://api-death.herokuapp.com/api/cita/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(
        {
          fecha: form.formatDate,
          hora: form.hora,
          contacto: form.contacto
        }
      )
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      setForm({fecha: "", hora: "", contacto: ""});
    })
    .catch(err => console.log(err))

  }

  const handleSumbit = (e) => {
    e.preventDefault();

    if(!form.fecha || !form.hora || !form.contacto) {
      alert("Datos incompletos")
      return;
    }
    
    addAppointment();
  }

  return (
    <div className={st.box}>
      <h3>New Appointment</h3>

      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="fecha">Date</label>
          <input type="text" id='fecha' name='fecha' readOnly required value={form.fecha} placeholder='Seleccione una fecha en el calendario'/>
        </div>
        <div>
          <label htmlFor="hora">Hour</label>
         <input type="text" name="hora" id="hora" required value={form.hora} placeholder='hora de la cita' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="contacto">Contacto</label>
          <input type="text" name="contacto" id="contacto" required placeholder='Información de contacto como el correo' value={form.contacto} onChange={handleChange}/>
        </div>
        <input type="submit" value="Save" className={st.btn}/>
      </form>
    </div>
  )
};

export default CreateAppointment;
