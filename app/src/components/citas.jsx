import React, {Fragment} from 'react'
const Citas = ({boxCitas, index, eliminarCita}) => {
    const {mascota, propietario, fecha, hora, sintomas, id} = boxCitas[index];
    return ( 
        <Fragment>
            <div className="cita">
                <p>Mascota: <span>{mascota}</span></p>
                <p>propietario: <span>{propietario}</span></p>
                <p>fecha: <span>{fecha}</span></p>
                <p>hora: <span>{hora}</span></p>
                <p>sintomas: <span>{sintomas}</span></p>
                <button
                className="button eliminar u-full-width"
                    onClick={ () => eliminarCita(id)}
                >
                    Eliminar &times;
                </button>
            </div>    
        </Fragment>
    );
}
 
export default Citas;