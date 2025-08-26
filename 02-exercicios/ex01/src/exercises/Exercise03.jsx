import { useState } from 'react';
import Sentenca from '../components/Sentenca';

export default function Exercise03() {
	const [mensagem, setMensagem] = useState('');

	const mostrarTemperatura = (temperatura) => {
		let roupaRecomendada;

		if (temperatura <= 17) {
			roupaRecomendada = 'Casaco pesado e calça térmica';
		} else if (temperatura > 17 && temperatura < 26) {
			roupaRecomendada = 'Camiseta e Jeans';
		} else if (temperatura >= 26) {
			roupaRecomendada = 'Shorts e regata';
		}

		setMensagem(
			`Com temperatura de ${temperatura}° a roupa recomendada é ${roupaRecomendada}`
		);
	};

	return (
		<div className="container-exercicio">
			<Sentenca
				emoji={'👕'}
				sentenca={
					'3. Crie um programa que ajude um usuário a escolher roupas com base na temperatura atual. O usuário informa a temperatura e o programa sugere roupas apropriadas (casaco pesado, camiseta, shorts, etc.).'
				}
			/>
			<p>Informe a temperatura da sua região</p>
			<div className="container-input">
				<input
					onInput={(event) => mostrarTemperatura(event.target.value)}
					className="input"
					type="number"
				/>
			</div>
			<div>{mensagem}</div>
		</div>
	);
}
