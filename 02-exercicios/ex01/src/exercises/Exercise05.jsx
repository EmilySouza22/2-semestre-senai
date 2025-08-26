import { useState } from "react";
import Sentenca from '../components/Sentenca';

export default function Exercise05() {
    const [mensagem, setMensagem] = useState('');
  
    return (
        <div className='container-exercicio'>
            <Sentenca 
                emoji={'🚗'} 
                sentenca={'5. Crie um programa que ajude um usuário a escolher um meio de transporte com base na distância que deseja percorrer (ônibus, metrô, táxi, avião, navio…) e calcule o tempo estimado de viagem. Aqui te dou liberdade para criar suas próprias regras.'}
            />
            <p>Insira a distância que deseja percorrer</p>
            <div className="container-input">
                <input className="input" type="number"/>
            </div>
            <div>{mensagem}</div>
        </div>
    );
}