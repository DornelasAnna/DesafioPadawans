import react from 'react';
import { useState, useEffect } from "react";

interface tarefas {
    userId: number;
    id: number;
    title: string;
    completed:Boolean;
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
    <body>
       <h1 className="tituloPagina">Tarefas</h1>
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
            <tr key={tarefas.userId}>  
                <td> 
                <input className="uk-checkbox"
                        type="checkbox"
                        checked ={tarefas.completed}
                         />
                </td> 
                <td > {tarefas.userId}</td>
                <td>{tarefas.id} </td>
                <td>{tarefas.title} </td>
            
            </tr>
        ))}
        </tbody>
    </table>
    </body>
  );
}





