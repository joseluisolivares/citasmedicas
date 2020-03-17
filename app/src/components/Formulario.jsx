import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';
const Formulario = ({crearCita}) => {
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const [error, actualizarError] = useState(false)
    const [errorText, actualizarErrorText] = useState('Todos los campos son obligatorios')

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    const {mascota, propietario,fecha,hora,sintomas} = cita;

    const submitCita = (e) => {
        e.preventDefault();
       
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ){
            actualizarError(true);
            return;
        }else{
            actualizarError(false);
            idCita();
            crearCita(cita);
            actualizarCita({
                mascota: '',
                propietario:'',
                fecha:'',
                hora:'',
                sintomas:''
            })
        }
       
    }
    const idCita = () => {
        cita.id = uuid();
    }
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error 
                ?
                    <p className="alerta-error">{errorText}</p>   
                :
                    null
            }
            <form 
                action=""
                onSubmit={submitCita}
                >
                <label htmlFor="">Nombre de la mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={mascota}    
                />
                <label htmlFor="">Nombre del dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState} 
                    value={propietario} 
                />
                <label htmlFor="">Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label htmlFor="">Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label htmlFor="">Síntomas</label>
                <textarea 
                    name="sintomas" 
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>

            </form>
        </Fragment>
     );
}
 
export default Formulario;