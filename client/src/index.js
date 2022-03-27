import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyContext } from './components/Context/Context';

ReactDOM.render(
    <MyContext>
        <App />
    </MyContext>,
    document.getElementById('root')
)