import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css.map';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
