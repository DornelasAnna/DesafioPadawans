import react from 'react';
import { useState, useEffect } from "react";


export default function Todos()
 { 
    const [data, setData] = useState([]);
    useEffect(() => {
		async function fetchData() {//realiza uma requisição get a Api 
			let url = "https://jsonplaceholder.typicode.com/todos";//url da requisição
			try {
				let response = await fetch(url);//chamada da requisição
				let json = await response.json();
                
				setData(json);//atribuição dos dados 

				return await response.json();
			} catch (error) {}
		}
		fetchData();
	}, []);

  return (//retorno de todas as postagens
    <body>
       <h1 className="tituloPagina">Tarefas</h1>
      
    
    <div className="uk-container"> 
    <table class= "uk-table uk-table-small  uk-table-hover  uk-table-divider uk-nav uk-nav-default " uk-sortable="cls-custom: uk-box-shadow uk-flex uk-flex-middle uk-background">
        <thead> 
            <tr>
                <th>✓</th>
                <th>Usuário</th>
                <th>Id</th>
                <th>Tarefa </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map(tarefas=>(
            <tr key={tarefas.id}>  
                <td> 
                { tarefas.completed=== true && <input className="uk-checkbox"
                        type="checkbox"
                        checked />
                }{tarefas.completed ===false &&< input className="uk-checkbox"
                  type="checkbox" />    
                        }
                  
                </td> 
                <td > {tarefas.userId}</td>
                <td>{tarefas.id} </td>
                <td>{tarefas.title} </td>
               
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    
 
   
    </body>
  );
}





