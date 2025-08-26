import { useState } from 'react';
import Sentenca from '../components/Sentenca';

export default function Exercise06() {
	const [mensagem, setMensagem] = useState('');

	const mostrarTempo = (cidade) => {
		let previsaoTempo;

		if (cidade.toLowerCase() === 'santa catarina') {
			previsaoTempo = '18°C, Chovendo'
		} else if (cidade.toLowerCase() === 'são paulo') {
			previsaoTempo = '22°C, Nublado'
		} else if (cidade.toLowerCase() === 'rio de janeiro' ) {
			previsaoTempo = '27°C, Ensolarado'
		}else{
            return setMensagem('Cidade não encontrada')
        }

		setMensagem(
			`Na cidade de ${cidade} a previsão do tempo é de ${previsaoTempo}.`
		);
	};

	return (
		<div className="container-exercicio">
			<Sentenca
				emoji={'🌧️'}
				sentenca={
					'6. Faça um aplicativo de previsão do tempo que permite ao usuário inserir o nome de uma cidade e, com base na cidade escolhida, fornece a previsão do tempo atual.'
				}
			/>
			<p>Insira uma cidade para ver a previsão do tempo!</p>
			<div className="container-input">
				<input
					onInput={(event) => mostrarTempo(event.target.value)}
					className="input"
					type="text"
				/>
			</div>
			<div>{mensagem}</div>
		</div>
	);
}
