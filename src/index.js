//Import the React and react libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {

    return (
      <div>Hi there!</div>
    );
};



//Take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);