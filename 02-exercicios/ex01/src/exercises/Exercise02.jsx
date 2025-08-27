import { useState } from "react";
import Sentenca from '../components/Sentenca';

export default function Exercise02() {
    const [valor, setValor] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [moeda, setMoeda] = useState('');

    const taxas = {
        dolar: 1, 
        euro: 0.85, 
        real: 5.30 
    };

    const converterValor = (moedaAlvo) => {
        const valorFloat = parseFloat(valor);

        if (isNaN(valorFloat) || valorFloat <= 0) {
            setMensagem("Digite um valor válido.");
            return;
        }

        let valorConvertido;

        switch (moedaAlvo) {
            case 'dolar':
                valorConvertido = valorFloat / taxas.real; 
                break;
            case 'euro':
                valorConvertido = (valorFloat / taxas.real) * taxas.euro; 
                break;
            default:
                setMensagem("Moeda inválida.");
                return;
        }

        setMensagem(`Valor convertido para ${moedaAlvo.toUpperCase()}: ${valorConvertido.toFixed(2)}`);
    };

    return (
        <div className='container-exercicio'>
            <Sentenca 
                emoji={'🪙'} 
                sentenca={'2. Crie um aplicativo de conversão de moedas que permita ao usuário escolher entre três moedas (dólar, euro e real) e, com base na escolha, converta um valor de uma moeda para outra.'}
            />
            <p>Digite o valor em reais para conversão</p>
            <div className="container-btn">
                <input
                    onInput={(event) => setValor(event.target.value)}
                    className="input"
                    type="number"
                />
                <button className="btn" onClick={() => converterValor('dolar')}> Dólar </button>
                <button className="btn" onClick={() => converterValor('euro')}> Euro </button>
            </div>
            <div>{mensagem}</div>
        </div>
    );
}
