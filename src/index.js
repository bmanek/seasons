import React from 'react';
import ReactDOM from 'react-dom';


// refactor App to class
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: null,
      errorMessage: ""
    }

// moved out of render b/c too costly to do multiple times
    window.navigator.geolocation.getCurrentPosition(
// getCurrentPosition takes two callbacks: success and failure
      position => {
        this.setState({
          lat: position.coords.latitude
        })
      },
      err => {
        this.setState({
          errorMessage: err.message
        })
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>


  }
}


// original, functional syntax

// const App = () => {
//   return(
  //     <div>Latitude:</div>
  //   )
  // }

ReactDOM.render(
  <App />,
  document.querySelector('#root')

)
