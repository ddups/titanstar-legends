import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import appData from './raw-data.json'
import './styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <App props={appData} />
    </React.StrictMode>,
    document.getElementById('root')
);
