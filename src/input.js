require('./assets/stylesheets/app.sass');

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './app/App.jsx';
import PropTypes from 'prop-types';

ReactDOM.render(<App />, document.getElementById('root'));