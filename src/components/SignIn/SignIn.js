import React from 'react';
import './SignIn.css';
import Ninja from '../Ninja/Ninja.js';
import pow from '../Image/pow.png';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}
	
	onSumbitSignIn = () => {
		fetch('http://localhost:3000/signin',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			})
	}

	render() {
		const{ onRouteChange } = this.props;
		return (
			<main className='box'>
				<div className='Ninja'> 
					<Ninja />
					<img className='pow' src={pow} alt='pow' />
				</div> 
				<div className='login'>
					<h1 className='header'>Login</h1>
					<input onChange={this.onEmailChange} placeholder='Email' id='email' className='signForm email' type='text' autoComplete='off'/>
					<input onChange={this.onPasswordChange} placeholder='Password'id='password' className='signForm password' type='password'/>
					<input onClick={this.onSumbitSignIn} type='submit' value="LOGIN" className='signForm'/>
				</div>
				<p onClick={() => onRouteChange('register')} className='register'>Create New Account</p>
			</main>

		)		
	}
}

export default SignIn;