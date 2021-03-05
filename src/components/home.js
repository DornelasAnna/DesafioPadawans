import react from 'react';
import "./style.css";
import HomeImage from './HomeImage.png'; // with import



const Home=()=>
 {
  

  return (
  <div>

    <body className="homeBackground"> 
    <div id="homeImageContainer"> 
      <h1 id="homeTitulo" className=".uk-align-left">
        Desafio<br/>Framework<br/> Padawans
      </h1>
       <img alt="Ilustração de uma menina usando o computador ao lad de uma projeção de sua tela. " id="homeImage"src={HomeImage} ></img>
      </div>
    </body>   

    <footer> 
      <h3 id="tituloFooter">Feito por: Anna Clara Dornelas </h3>
      <a id="iconeLinkedin"href="https://www.linkedin.com/in/anna-dornelas-ab01411aa" uk-icon="linkedin"></a>
    </footer>
  </div>
  );
}

export default Home;
