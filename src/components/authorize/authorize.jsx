import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import './authorize.css';

const Authorize = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoginStatus] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {!isLoggedIn && <div className="login-container">
        <div className="left-container">
          <img src="https://www.printavo.com/wp-content/uploads/2022/06/logo-01.svg" alt="Printavo logo" />
          <h2>Authorize Printavo Integration</h2>
          <p>In order to import from Printavo, a connection to Printavo is required. Connect to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="right-container">
          <h2>Login</h2>
          <div className="p-field">
            <label className='authorize-label' htmlFor="Email">Email</label>
            <InputText
              id="Email"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-inputtext-left"
            />
          </div>
          <div className="p-field">
            <label className='authorize-label' htmlFor="password">Password</label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-inputtext-left"
            />
          </div>
          <Button label="Authorize" type="submit" className="p-button-raised p-button-primary authorize-button" />
        </form>
      </div>}
      {isLoggedIn && <div>
        <div className="printavo-connected-container">
          <img
            src="https://www.printavo.com/wp-content/uploads/2022/06/logo-01.svg"
            alt="Printavo logo"
            className="printavo-logo"
          />
          <div className="printavo-connected-message">
            <h2>Authorize to Printavo Integration successful</h2>
            <p className='printavo-success'>Printavo connected</p>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Authorize;
