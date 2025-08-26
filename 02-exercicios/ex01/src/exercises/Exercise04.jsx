import { useState } from "react";
import Sentenca from '../components/Sentenca';

export default function Exercise04() {
    const [mensagem, setMensagem] = useState('');
  
    const mostrarQuarto = (tipo) => {

        let disponibilidade, preco;

        if (tipo === 'simples') {
            disponibilidade = 'lotado';
            preco = 50;
        } else if (tipo === 'duplo') {
            disponibilidade = 'disponível';
            preco = 80;
        } else if (tipo === 'suíte') {
            disponibilidade = 'lotado';
            preco = 110;
        }

        setMensagem(`O quarto ${tipo} está ${disponibilidade} e custa R$${preco},00`)
    }

    return (
        <div className='container-exercicio'>
            <Sentenca 
                emoji={'🛌'} 
                sentenca={'4. Desenvolva um sistema de reserva de quartos de hotel, onde o usuário escolhe o tipo de quarto (simples, duplo, suíte) e o programa verifica a disponibilidade e o preço.'}
            />
            <p>Escolha o tipo de quarto!</p>
            <div className="container-btn">
                <button className="btn" onClick={() => mostrarQuarto('simples')}>Simples</button>
                <button className="btn" onClick={() => mostrarQuarto('duplo')}>Duplo</button>
                <button className="btn" onClick={() => mostrarQuarto('suíte')}>Suíte</button>
            </div>
            <div>{mensagem}</div>
        </div>
    );
}