import React from 'react';
import Tilt from 'react-tilt';
import ninja from './ninja.png';

const Ninja = () => {
	return  (
		<div className='ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 100 }}>
				<div className="Tilt-inner"><img  style={{width: '350px', height: '350px', padding: '30px 35px 25px 25px'}} alt='Ninja' src={ninja}/></div>
			</Tilt>
		</div>
	);
}

export default Ninja;