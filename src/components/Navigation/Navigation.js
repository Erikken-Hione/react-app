import React from 'react';
import './Navigation.css';


const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn) {
		return (
			<nav>
				<p className='nav'>About</p>
				<p  className='nav' onClick={() => onRouteChange('signin')}>Sign Out</p> 
			</nav>
		);
	} else {
			return (
				<nav>
					<p  className='nav'>About</p>
					<p  onClick={() => onRouteChange('signin')} className='nav'>Sign In</p>
					<p onClick={() => onRouteChange('register')} className='nav'>Register</p>
				</nav>
		);
	}
}


export default Navigation;