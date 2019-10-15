import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}

class App extends React.Component{
	render() {
        return (
        	<div className="App">
        	<Particles className='particles'
          		params={particlesOptions}
        	/>

            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />

               
            </div>
        );
    }
}
export default App;
