import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { onStoreDone } from './redux/createStore';

onStoreDone(function() {
  // always render the component after Redux store are ready
  ReactDOM.render(<App />, document.getElementById('root'));
});