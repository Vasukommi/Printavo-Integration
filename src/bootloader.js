import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

const fetch_el = document.getElementById("printavo");
const mount = (el) => {
    const root = ReactDOM.createRoot(el);
    root.render(
        <App />
    )
}

if (fetch_el) {
    mount(fetch_el)
}

export { mount }