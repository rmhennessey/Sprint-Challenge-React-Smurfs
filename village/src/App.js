import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log((response));
        this.setState({ smurfs: response.data});
      })
      .catch(error => console.log(error));
  }

  postSmurf = (smurf) => {
    console.log(smurf)
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        this.setState({ smurfs: response.data})
      })
      .catch(error => console.log(error));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Smurfs</NavLink>
          <NavLink to='/smurf-form'>Add a Smurf</NavLink>

        </nav>

        <Route 
          path='/smurf-form'
          exact
          render={ (props) => (
          <SmurfForm 
          {...props}
          postSmurf={this.postSmurf} /> 
        )}/>
        <Route
          path='/'
          exact
          render= { (props) => (
          <Smurfs 
          {...props}
          smurfs={this.state.smurfs} />
          )}/>
      </div>
    );
  }
}

export default App;
