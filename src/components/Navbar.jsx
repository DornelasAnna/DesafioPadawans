import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Navbar =() =>{
return(
   
    <div className="uk-position-relative navbar App-header">
        <div >
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li >
                            <Link to="/Albuns">Albuns</Link>
                        </li>
                        <li>
                            <Link to="/Postagens">Postagens</Link>
                        </li>
                        <li>
                            <Link to="/Todos">ToDos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    
);


}
export default Navbar;
