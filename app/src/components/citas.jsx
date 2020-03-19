import React, {Fragment} from 'react';
const Citas = ({citas,index,handleClickDeleteCita}) => {
    const {mascota, propietario, fecha, hora, sintomas} = citas[index];
    return ( 
        <Fragment>
            <div className="cita">
                <p>Mascota:{mascota}</p>
                <p>Propietario:{propietario}</p>
                <p>Fecha:{fecha}</p>
                <p>Hora:{hora}</p>
                <p>Sintomas:{sintomas}</p>
                <button
                   onClick={ () => handleClickDeleteCita(mascota)}
                >Eliminar</button>
            </div>  
        </Fragment>
     );
}
 
export default Citas;
