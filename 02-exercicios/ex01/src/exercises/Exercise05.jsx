import { useState } from "react";
import Sentenca from '../components/Sentenca';

export default function Exercise05() {
    const [mensagem, setMensagem] = useState('');
    
    const escolherTransporte = (distancia) => {

        let transporteRecomendado;
        let velocidadeTransporte;

        if (distancia <= 0) {
            return setMensagem('Distância inválida')
        }

        if (distancia >= 1 && distancia < 12) {
            transporteRecomendado = 'a pé';
            velocidadeTransporte = 4.5;

        } else if (distancia >= 12 && distancia < 20) {
            transporteRecomendado = 'de bicicleta';
            velocidadeTransporte = 15;

        } else if (distancia >= 20 && distancia < 100) {
            transporteRecomendado = 'de ônibus';
            velocidadeTransporte = 50;

        } else if (distancia >= 100 && distancia < 150) {
            transporteRecomendado = 'de uber';
            velocidadeTransporte = 60;

        } else if (distancia >= 150) {
            transporteRecomendado = 'de avião';
            velocidadeTransporte = 850;
        }

        let tempoViagemHoras = distancia / velocidadeTransporte;
        let horas = Math.floor(tempoViagemHoras);
        let minutos = Math.round((tempoViagemHoras - horas) * 60)

        setMensagem(`Para ${distancia} KM o recomendado é ir ${transporteRecomendado} e o tempo de viagem será de ${horas}h e ${minutos}min`)
    }

    return (
        <div className='container-exercicio'>
            <Sentenca 
                emoji={'🚗'} 
                sentenca={'5. Crie um programa que ajude um usuário a escolher um meio de transporte com base na distância que deseja percorrer (ônibus, metrô, táxi, avião, navio…) e calcule o tempo estimado de viagem. Aqui te dou liberdade para criar suas próprias regras.'}
            />
            <p>Insira a distância que deseja percorrer em KM</p>
            <div className="container-input">
                <input onInput={(event) => escolherTransporte(event.target.value)} className="input" type="number"/>
            </div>
            <div>{mensagem}</div>
        </div>
    );
}