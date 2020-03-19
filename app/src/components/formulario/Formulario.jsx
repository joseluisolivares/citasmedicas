import React, {Fragment} from 'react';
import InputText from './input-text';
import InputDate from './input-date';
import InputTime from './input-time';
import TextArea from './text-area';
import ButtonSubmit from './btn-submit';
import PropTypes from 'prop-types';
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
        setData({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
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
                    placeholder='Mascota'
                    name="mascota"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                    value={mascota}
                />
                <InputText
                    label='Nombre del propietario'
                    placeholder='Propietario'
                    name="propietario"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                    value={propietario}
                />
                <InputDate
                    type="date"
                    label='Fecha de la cita'
                    name="fecha"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                    value={fecha}

                />
                <InputTime
                    type="time"
                    label='Hora de la cita'
                    name="hora"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                    value={hora}

                />
                <TextArea
                    label='Síntomas'
                    name="sintomas"
                    className="u-full-width"
                    handleChangeInput={handleChangeInput}
                    noFillInput={noFillInput}
                    errorText={errorText}
                    value={sintomas}

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

Formulario.propTypes = {
    data: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    citas: PropTypes.array.isRequired,
    setCitas: PropTypes.func.isRequired,
    noFillInput: PropTypes.string.isRequired,
    setNoFillInput: PropTypes.func.isRequired,
    errorText: PropTypes.string.isRequired,
}
 
export default Formulario;
