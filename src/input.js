require('./assets/stylesheets/app.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './app/App.jsx';
import depth from './app/depth.js';


ReactDOM.render(<App />, document.getElementById('root'));