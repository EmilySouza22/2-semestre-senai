import { useState } from "react";
import Sentenca from '../components/Sentenca';

export default function Exercise02() {
    const [mensagem, setMensagem] = useState('');
  
    return (
        <div className='container-exercicio'>
            <Sentenca 
                emoji={'🪙'} 
                sentenca={'2. Crie um aplicativo de conversão de moedas que permita ao usuário escolher entre três moedas (dólar, euro e real) e, com base na escolha, converta um valor de uma moeda para outra.'}
            />
            <p>Selecione a moeda para conversão</p>
            <div className="container-btn">
                <button className="btn" onClick={() => mostrarPreco('dólar')}>Dólar</button>
                <button className="btn" onClick={() => mostrarPreco('euro')}>Euro</button>
                <button className="btn" onClick={() => mostrarPreco('real')}>Real</button>
            </div>
            <div>{mensagem}</div>
        </div>
    );
}