import React from 'react';
import Ninja from '../Ninja/Ninja.js';
import pow from '../Image/pow.png';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			RegisterEmail: '',
			RegisterPassword: '',
			RegisterName: ''
		}
	}

	onNameChange = (event) => {
		this.setState({RegisterName: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({RegisterEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({RegisterPassword: event.target.value})
	}

	onButtonSubmit = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.RegisterEmail,
				password: this.state.RegisterPassword,
				name: this.state.RegisterName
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user)
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
					<h1 className='header'>Register</h1>
					<input onChange={this.onNameChange} placeholder='Name' id='name' className='signForm name' type='text' autoComplete='off'/>
					<input onChange={this.onEmailChange} placeholder='Email' id='email' className='signForm email' type='text' autoComplete='off'/>
					<input onChange={this.onPasswordChange} placeholder='Password'id='password' className='signForm password' type='password'/>
					<input onClick={this.onButtonSubmit} className='signForm' type='submit' value="REGISTER" />
				</div>
				<p onClick={() => onRouteChange('signin')} className='register'>Login To Your Account</p>
			</main>

		)		
	}
}

export default Register;