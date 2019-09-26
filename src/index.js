import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


// refactor App to class
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: null,
      errorMessage: ""
    }
  }

  componentDidMount() {
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
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request"/>


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
