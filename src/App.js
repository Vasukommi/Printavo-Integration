import React from 'react';
import Authorize from './components/authorize/authorize.jsx';
import Orders from './components/orders/Orders.jsx';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Authorize />
      <hr />
      <Orders />
    </div>
  );
}

export default App;
