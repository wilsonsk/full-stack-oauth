import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// will pull and prop off window object, if no initialData, var is still created, and set to undefined
ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);




