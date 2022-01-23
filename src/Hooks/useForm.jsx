import { useState } from "react"
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [data, setData] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleBlur = e => {
        handleChange(e);
        setErrors(validateForm(form))
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0) {
            setLoading(true);
            helpHttp().post(
                'https://api-death.herokuapp.com/api/cita/add', 
                {
                    body: form,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    }
                }
            ).then(res => {
                setLoading(false);
                setResponse(true);
                setData(res);
                setForm(initialForm);
                setTimeout(() => {
                    setResponse(false);
                }, 5000);
            })
        } else {
            console.log("existen errores")
            return;
        } 
    }

    return { form,data, errors, loading, response, handleChange, handleBlur, handleSubmit }
}
