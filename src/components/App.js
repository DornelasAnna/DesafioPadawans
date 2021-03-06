import react from 'react';
import Navbar from './Navbar';
import { BrowserRouter , Switch, Route, Router } from 'react-router-dom';
import Albuns from './Albuns';
import Postagens from './Postagens';
import Todos from './Todos';
import Home from './home';



const App=()=>//Definição de componentes iniciais e declaração das urls
 {
  
  return (
   
    <BrowserRouter>     
          <Navbar/>
          <div > 
          <Switch>
            <Route path= "/" exact component={Home}/>
            <Route path="/Albuns" component={Albuns} />
            <Route path="/Postagens" component={Postagens} />
            <Route path="/Todos"  component={Todos}/>
          </Switch>
        
      </div>
           
    
    </ BrowserRouter>
 
  );
}

export default App;
