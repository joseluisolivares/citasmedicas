import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Citas from './components/citas';




function App() {
  const [boxCitas, actualizarBoxCitas] = useState([]);
  const crearCita = (cita) => {
    actualizarBoxCitas([...boxCitas, cita]);
  }
  const eliminarCita = (id) => {
    const citaEliminar = boxCitas.filter( (cita) => cita.id !== id);
    actualizarBoxCitas(citaEliminar);
  }
  const tituloCitas = boxCitas.length ? 'Listado de citas' : 'Sin citas'
  return (
    <Fragment>
      <h1>Administrado de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            {}
           <h2 class="boxCitas">{tituloCitas}</h2>    
            {boxCitas.length !==0
              ? 
                boxCitas.map( (cita, index) => (
                  <Citas
                    key={cita.id}
                    boxCitas={boxCitas}
                    index={index}
                    eliminarCita={eliminarCita}
                  />
                ))
              :
                  null
            }
          </div>
        </div>
      
      </div>
    </Fragment>
  );
}

export default App;
