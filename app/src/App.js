import React, {Fragment, useState} from 'react';
import Formulario from './components/formulario/Formulario';





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
	const [error, setError] = useState(false);
	//state text mensaje error inputs
	const [errorText, setErrorText] = useState('es obligatorio');
	//state validación inputs
	const [noFillInput, setNoFillInput] = useState('');

	//state citas
	const [citas, setCitas] = useState([]);

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
					
				</div>
			</div>
		</Fragment>
  	);
}

export default App;
