import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/formulario/Formulario';
import Citas from './components/citas';
import uuid from 'uuid/v4';


function App() {
	//state de los inputs
	const [data, setData] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
		sintomas:''
	})

	
	

	//state error inputs
	const [setError] = useState(false);

	//state text mensaje error inputs
	const [errorText] = useState('es obligatorio');

	//state validación inputs
	const [noFillInput, setNoFillInput] = useState('');


	//localStorage
	let citasIniciales = JSON.parse(localStorage.getItem('citas'));

	if(!citasIniciales){
		citasIniciales=[];
	}
	//state citas
	const [citas, setCitas] = useState(citasIniciales);
	//localStorage
	useEffect( () => {
		if(citasIniciales){
			localStorage.setItem('citas', JSON.stringify(citas))
		}else{
			localStorage.setItem('citas', JSON.stringify([]))
		}
	},[citas, citasIniciales]);

	const handleClickDeleteCita = (mascota) => {
		const citaEliminar = citas.filter( (cita) => cita.mascota !== mascota);
		setCitas(citaEliminar);
	  }
  	return (
		<Fragment>
			<div className="container">
				<div className="formulario">
					<Formulario
						data={data}
						setData={setData}
						citas={citas}
						setCitas={setCitas}
						setError={setError}
						noFillInput={noFillInput}
						setNoFillInput={setNoFillInput}
						errorText={errorText}
					/>
				</div>
				<div className="citas">
					{citas.length ? <h1>Listado de citas</h1> : <h1>Sin citas</h1>}
					{citas.map( (cita,index) => (
						<Citas
							key={uuid()}
							citas={citas}
							index={index}
							data={data}
							handleClickDeleteCita={handleClickDeleteCita}
						/>	
					))}
					
				</div>
			</div>
		</Fragment>
  	);
}

export default App;
