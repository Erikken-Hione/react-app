import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import Particles from 'react-particles-js';
import Game from './components/Game/Game.js';
import Register from './components/Register/Register.js';

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 400 
      }
    }
  }
}

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: '',
    score: 0
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState
  }

  componentDidMount() {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      score: data.score
    }})
  }

  onRouteChange = (route) => {
    switch (route) {
      case 'signin':
       this.setState(initialState);
        break;
      case 'home':
       this.setState({isSignedIn:true})
    }
    this.setState({route: route});
  }

  renderRoute = (route) => {
    switch (route) {
      case 'home':
        return <Game name={this.state.user.name} score={this.state.user.score}/>;
        break;
      case 'signin':
        return <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
        break;
      case 'register':
        return <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
        break;
    }
  }

  render() {
    return(
    <div>
      <Particles className='particles' params={particlesOptions}/>
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
      {this.renderRoute(this.state.route)} 
    </div>
    )
  }
}

export default App;
