import react from 'react';
import { useState, useEffect } from "react";


  
export default function Albuns()
 { 
    const [data, setData] = useState([]);
    useEffect(() => {
		async function fetchAlbuns() {//Realiza uma requisição get a Api  
			let url = "https://jsonplaceholder.typicode.com/albums";//url da requisição
			try {
				let response = await fetch(url);//chamada da requisição
				let json = await response.json();  
				setData(json);//atribuição dos dados 
				return await response.json();
			} catch (error) {}
		}
		fetchAlbuns();
	}, []);


  return (//retorno de todos os Albuns
    <body>
      < h1 className="tituloPagina">Álbuns </h1>
    <div className="uk-container">
		<table class= "uk-table uk-table-small  uk-table-hover  uk-table-divider ">
			<thead > 
				<tr  >
					<th>Usuário</th>
					<th>Id</th>
					<th>Album </th>
				</tr>
			</thead>
			<tbody>
			{data.map(Album=>(
				<tr key={Album.userId}>   
					<td > {Album.userId}</td>
					<td>{Album.id} </td>
					<td>{Album.title} </td>
				</tr>
			))}
			</tbody>
		</table>
	</div>
    </body>
  );
}







