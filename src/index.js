import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Cart from './cart';
import NavBar from './navBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Cart/>
  </React.StrictMode>,
  document.getElementById('root')
);

