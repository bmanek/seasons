import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'

const App = () => {
  const { lat, errorMessage } = useLocation();

  let content;
    if (errorMessage) {
      content = <div>Error: {errorMessage}</div>
    } else if (lat) {
      content = <SeasonDisplay lat={lat} />
    } else {
      content = <Spinner message="Please accept location request"/>
    }

  return <div className="border red">{content}</div>
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log(registration.active.scriptURL, "is:", registration.active.state)
    })
  });
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
