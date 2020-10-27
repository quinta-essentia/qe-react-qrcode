import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/app.jsx';

const renderApp = () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root'),
  );
};

renderApp();
