import react from 'react';
import { useState, useEffect } from "react";

interface Album {
    userId: number;
    id: number;
    title: string;
  }
export default function Albuns()
 { 
    const [Albuns, setAlbuns] = useState([]);
    useEffect(() => {
		async function fetchAlbuns() {
			let url = "https://jsonplaceholder.typicode.com/posts";
			try {
				let response = await fetch(url);
				let json = await response.json();
                
				setAlbuns(json);

				return await response.json();
			} catch (error) {}
		}
		fetchAlbuns();
	}, []);

    console.log(Albuns);

  return (
    <body>
       
    <table class= "uk-table uk-table-small  uk-table-hover  uk-table-divider">
        <thead> 
            <tr>
                <th>Usuário</th>
                <th>Id</th>
                <th>Album </th>
            </tr>
        </thead>
        <tbody>
           {Albuns.map(Album=>(
            <tr key={Album.userId}>   
                <td > {Album.userId}</td>
                <td>{Album.id} </td>
                <td>{Album.title} </td>
            </tr>
        ))}
        </tbody>
    </table>
    </body>
  );
}





/*

export default function VisualizacaoGeral({ navigation }) {
	

	function renderReceita(receitas) {
		return (
			<View>
				<FlatList
					data={receitas.conteudo}
					extraData={receitas.conteudo}
					renderItem={renderizarMovimentacoes}
					keyExtractor={(item) => item.id }
					
				></FlatList>
			</View>
		);
	}

	const renderizarMovimentacoes = ({ item }) => {
		return (
			<ItemMovimentacao
				indice={item.id}
				descricao={item.descricao}
				valorPago={item.valor_pago}
				dataLancamento={item.data_lancamento}
			/>
		);
	};

	return (
		<View style={[estilos.tela, estiloExcecao.container]}>
			<View style={estilos.telaInterior}>
				<IndicadorRetorno telaAtual={"Receitas"} />

				<View
					style={[tailwind("flex-row bg-white justify-center")]}
				></View>
				<View style={tailwind("justify-between flex-row p-3")}>
					<TextInput
						style={tailwind("flex-row mx-2 flex-grow")}
						placeholder={"Pesquise por uma entrada de receita"}
						placeholderTextColor={"#A0AEC0"}
					/>
					<View style={[tailwind("flex-1")]}>
						<IconePesquisa />
					</View>
				</View>

				<View style={tailwind(" mb-2 ")}>
				<View style={tailwind(" mb-12 ")}>
				<View style={tailwind("flex-col mb-24 ")}>
					{isLoading ? (
						<Text>Loading...</Text>
					) : (
						renderReceita(receitas)
					)}
				</View>
				</View>
				</View>
			</View>
		</View>
	);
}

const headerHeight = StatusBar.currentHeight;

const estilos = {
	tela: tailwind("flex-1 bg-white"),
	telaInterior: tailwind("flex-1"),
	itemBalanca: tailwind("flex-1"),
	itemBalancaValor: tailwind("text-white text-lg font-bold"),
	itemBalancaDescricao: tailwind("text-white text-xs"),
	botoesMain: tailwind(
		"bg-gray-300 h-24 w-24 rounded-lg justify-center items-center"
	),
	botaoTerciarioGrande: tailwind("bg-transparent rounded my-4"),
	textoBotaoTerciario: tailwind(
		"text-blue-700 font-bold text-base text-center py-4 px-8"
	),
	botoesMainText: tailwind("text-blue-800 font-bold"),
	botoesMainImg: tailwind("w-6 h-6"),
	movimentacao: tailwind("flex-row mb-4 justify-between"),
	movimentacaoImg: tailwind("w-6 h-6"),
	movimentacaoTexto: tailwind("text-base flex-grow text-left font-bold"),
	movimentacaoValor: tailwind("text-base"),
	movimentacaoData: tailwind("text-gray-500"),
};

const estiloExcecao = StyleSheet.create({
	botao: {
		lineHeight: 68,
	},
	container: {
		paddingTop: headerHeight,
	},
});
*/