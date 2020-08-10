import React,{ Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Rank from './components/Rank/Rank.js';
import Clarifai from 'clarifai'
import ImageLinkForm  from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';


import './App.css';
const app = new Clarifai.App({
 apiKey: '7ede7756b2e1439a807165f3c7a7f4ec'
});



class App extends Component {
	constructor(){
		super();
		this.state={
			input:'',
			imageUrl: ''
		}


	}
	onInputChange=(event)=>{
		  this.setState({imageUrl: this.state.input});

	}

	onButtonSubmit=()=>{
	this.setState({imageUrl: this.state.input});
	app.models.predict( Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
    },
    function(err) {
     
    }
  );
	}

render(){
  return (
    <div className="App">
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
    <FaceRecognition imageUrl={this.state.imageUrl}/>

    </div>
  );
 }
}

export default App;
