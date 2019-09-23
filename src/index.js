import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // success
    (position) => console.log(position),
    // failure
    (err) => console.log(err)
  )

  return(
    <div>Latitude:</div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')

)
