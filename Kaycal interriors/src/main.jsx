import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './Context/authContext.js';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(
        <AuthContextProvider>
            <App />
        </AuthContextProvider>,
        rootElement
    );
}

