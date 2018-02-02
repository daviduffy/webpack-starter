require('./assets/stylesheets/app.sass');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './containers/App.jsx';
import configureStore from './store/configureStore';

import PropTypes from 'prop-types';

const store = configureStore();


ReactDOM.render(<App />, document.getElementById('root'));