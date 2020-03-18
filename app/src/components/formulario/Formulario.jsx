import React, {Fragment, useState} from 'react';
import InputText from './input-text';
import InputDate from './input-date';
import InputTime from './input-time';
import TextArea from './text-area';
import ButtonSubmit from './btn-submit';
const Formulario = ({data,setData,citas,setCitas,setError,noFillInput,setNoFillInput,errorText}) => {
    
    const {mascota, propietario,fecha,hora,sintomas} = data;

    const handleChangeInput = (e) =>{
        e.preventDefault();
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }   
    const handleSubmit = (e) =>{
        e.preventDefault();
        let validarInputs = Object.entries(data);
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ){
            validarInputs = validarInputs.filter( (values) => 
                values[1] === ''
            )
            validarInputs = validarInputs[0][0];
            setNoFillInput(validarInputs);
            setError(true);
            return;
        }
        
        setCitas([...citas,data]);
    }
    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form 
                action=""
                onSubmit={handleSubmit}
            >
                <InputText
                    label='Nombre de la mascota'
                    className="u"
                    placeholder='Mascota'
                    name="mascota"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                />
                <InputText
                    label='Nombre del propietario'
                    className="u"
                    placeholder='Propietario'
                    name="propietario"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                />
                <InputDate
                    type="date"
                    label='Fecha de la cita'
                    className="u"
                    name="fecha"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                />
                <InputTime
                    type="time"
                    label='Hora de la cita'
                    className="u"
                    name="hora"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                />
                <TextArea
                    label='Síntomas'
                    className="u"
                    name="sintomas"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                />
                <ButtonSubmit
                    type='submit'
                    className="u-full-width button-primary"
                    btnText='Agregar cita'
                />
            </form>
           
        </Fragment>
     );
}
 
export default Formulario;
