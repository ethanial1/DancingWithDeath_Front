import React, { useEffect } from 'react';
import { useForm } from '../../Hooks/useForm';
import Loader from '../Loader/Loader';
import st from './Appointment.module.css'

const initialForm = {
  hora: "",
  contacto: "",
  fecha: ""
}
const validationsForm = (formu) => {
  let errors = {}
  const fechaTest = /^\d{4}([\-/.])(0?[0-8]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
  const horaTest = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/;

  if(!formu.fecha.trim()) {
      errors.fecha = "Campo Fecha es requerido"
  } else if(!fechaTest.test(formu.fecha.trim())) {
      errors.fecha = "El campo fecha acepta un formato yyyy-mm-dd"
  }

  if(!formu.hora.trim()) {
      errors.hora= "Campo hora requerido"
  } else if(!horaTest.test(formu.hora.trim())) {
      errors.hora = "El campo hora es incorrecto"
  }

  return errors;
}

let style = {
  fontWeight: "bold",
  color: "#dc3545"
}

const CreateAppointment = ({fecha, hora}) => {
  //const [formatDate, setformatDate] = useState("");

  const { form, data, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);

  useEffect(() => {
    handleChange({target: {name: "fecha", value: `${fecha.year}-${fecha.month}-${fecha.day}`}})
  }, [fecha]);
  
  useEffect(() => {
    handleChange({target: {name: "hora", value: hora}})
  }, [hora]);


  return (
    <div className={st.box}>
      <h3>New Appointment</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fecha">Date</label>
          <input type="text" id='fecha' name='fecha' readOnly required value={form.fecha} placeholder='Seleccione una fecha en el calendario' onBlur={handleBlur}/>
          {errors.fecha && (<span style={style}>{errors.fecha}</span>)}
        </div>
        <div>
          <label htmlFor="hora">Hour</label>
          <input type="text" name="hora" id="hora" required value={form.hora} placeholder='hora de la cita' onChange={handleChange} onBlur={handleBlur}/>
          {errors.hora && <span style={style}>{errors.hora}</span>}
        </div>
        <div>
          <label htmlFor="contacto">Contacto</label>
          <input type="text" name="contacto" id="contacto" required placeholder='Información de contacto como el correo' value={form.contacto} onChange={handleChange} onBlur={handleBlur}/>
          {errors.contacto && <span style={style}>{errors.contacto}</span>}
        </div>
        <input type="submit" value="Save" className={st.btn}/>
      </form>
      {loading && <Loader />}
      { response && (data.err ? <span>Ocurrio un error </span> : (<span>{data.msg}</span>))}
    </div>
  )
};

export default CreateAppointment;
