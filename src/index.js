import React from 'react';
import ReactDOM from 'react-dom';


// refactor App to class
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
        // success
        (position) => console.log(position),
        // failure
        (err) => console.log(err)
      )
    return <div>Latitude:</div>
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
