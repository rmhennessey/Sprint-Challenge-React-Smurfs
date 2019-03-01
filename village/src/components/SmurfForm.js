import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // smurf: this.props.activeSmurf || {
      name: '',
      age: '',
      height: ''
    // }
    }
  }

//   componentDidUpdate(prevProps) {
//     if(
//         this.props.activeSmurf &&
//         prevProps.activeSmurf !== this.props.activeSmurf
//     ) {
//         this.setState({
//             friend: this.props.activeSmurf
//         })
//     }
//  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf(this.state)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  // updateSmurf = event => {
  //   event.preventDefault();
  // }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
          {/* onClick={this.addSmurf} */}
          {/* <button type="submit"onClick={this.updateSmurf}>Update Smurf</button> */}
        </form>
      </div>
    );
  }
}

export default SmurfForm;
