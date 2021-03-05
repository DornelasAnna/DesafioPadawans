import react from 'react';
import { useState, useEffect } from "react";
import "./style.css"


  
export default function Postagens()
{ 
    const [data, setData] = useState([]);
    useEffect(() => {
      async function fetchData()//Realiza uma requisição get a Api  
      {//
        let url = "https://jsonplaceholder.typicode.com/posts";//url da requisição
        try 
        {
          let response = await fetch(url);//chamada da requisição
          let json = await response.json();       
          setData(json);//atribuição dos dados  
        } catch (error) {}
      }
		fetchData();
	}, []);
  
  return (//retorno de todas as postagens
    <div id="campoPostagem">
        <div id="topoPostagem" >
            <h2 className="tituloPagina " id="tituloPostagem"> Postagens </h2>
        </div>
        { data.map(posts=>(
          <div id="postagem"> 
            <h1 className="tituloPostagem"> {posts.title}</h1>
            <h4 className="userPostagem"> User:{posts.userId}</h4>
            <p className="conteudoPostagem">{posts.body}</p>
          </div>  
        ))}
         
    </div>
  );
}





