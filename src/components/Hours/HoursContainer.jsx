import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import HourCard from './HourCard';

import st from './Hours.module.css'

const HoursContainer = ({fecha}) => {

    const [horas, setHoras] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const requestHours = async() => {
            setLoading(true);
            try {
                let res = await fetch(`https://api-death.herokuapp.com/api/cita/${fecha.month}/${fecha.day}/${fecha.year}?filtrar=true`);

                if(!res.ok) {
                    let err = new Error("Error en la petición Fetch");
                    err.status = res.status || '00';
                    err.statusText = res.statusText || "Ocurrio un error";
                    throw err;
                }

                let json = await res.json()
                
                setHoras(json.data)

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
      fecha.hasOwnProperty("month") && requestHours()
    }, [fecha]);
    
    return (
        <div className={st.contenedor}>
            { 
                !loading ?(
                    <div style={{marginTop: "1rem", padding: "10px"}}>
                        {
                            horas.map((hora, index) => <HourCard key={index} hora={hora}/>) 
                        }
                    </div>
                ): <Loader />
            }
            {error && <div>Ocurrio un error</div>}
        </div>
    )
};

export default HoursContainer;
