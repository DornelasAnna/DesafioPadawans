import react from 'react';
import { useState, useEffect } from "react";
import "./style.css"


  const posts ={//Dicionario
    "userId": 'userId',
    "id":'id',
    "title":'title', 
  
    'body':'body',
  };
export default function Postagens()
 { 
    const [data, setData] = useState([]);
    useEffect(() => {
		async function fetchData() {
			let url = "https://jsonplaceholder.typicode.com/posts";
			try {
				let response = await fetch(url);
				let json = await response.json();
                
				setData(json);

				return await response.json();
			} catch (error) {}
		}
		fetchData();
	}, []);
  
  return (
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





