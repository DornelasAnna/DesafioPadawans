import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Albuns from './components/Albuns';
import Postagens from './components/Postagens';
import Todos from './components/Todos';
import Home from './components/home';

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <Todos/>   
    </React.StrictMode>    
    ,document.getElementById('root')
);
reportWebVitals();
    


