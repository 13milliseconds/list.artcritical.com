import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

import '../node_modules/react-dates/lib/css/_datepicker.css';
import '../node_modules/react-select/dist/react-select.css';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('thelist'));
};