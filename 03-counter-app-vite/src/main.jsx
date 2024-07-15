import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWordApp } from './HelloWordApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={2}/>
        {/* <FirstApp username='Leonardo Toledo' edad='32'/> */}
    </React.StrictMode>
);