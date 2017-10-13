import React from 'react';
import ReactDOM from 'react-dom';
const render = (Component) => {
    ReactDOM.render(
     <Component/>
   , document.getElementById('app'))
}

export default render; 