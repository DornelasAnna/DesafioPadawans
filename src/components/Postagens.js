import react from 'react';
import { useState, useEffect } from "react";
import "./style.css"

interface posts {
    userId: number;
    id: number;
    title: string;
    body:string;
  }
export default function Todos()
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
        {data.map(posts=>(
                <div >    
                    <h3>{posts.title}</h3>
                    <p> {posts.body}</p>
                </div>
        ))}
        
    
    
    </div>
  );
}





