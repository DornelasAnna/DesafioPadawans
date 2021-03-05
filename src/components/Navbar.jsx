import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
/*Menu*/ 
const Navbar =() =>
{
return(
   
    <div className=" App-header sticky">
        <div >
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="index.html">Home </a>
                        </li>
                        <li >
                            <a href="Albuns.html">Álbuns</a>
                        </li>
                        <li>
                            <a href="Postagens.html">Postagens</a>
                            
                        </li>
                        <li>
                            <a href="Todos.html">Tarefas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    
);


}
export default Navbar;
