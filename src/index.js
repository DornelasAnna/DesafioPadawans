import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Albuns from './components/Albuns';
import Postagens from './components/Postagens';
import Todos from './components/Todos';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Albuns" component={Albuns} />
            <Route path="/Postagens" component={Postagens} />
            <Route path="/Todos" component={Todos} />
        </Switch>
    </ BrowserRouter>
  ,document.getElementById('root')
);

    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
