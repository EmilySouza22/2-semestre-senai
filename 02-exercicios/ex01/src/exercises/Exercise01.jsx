import { useState } from "react";
import Sentenca from '../components/Sentenca';
import './Exercise01.css'

export default function Exercise01() {
    const [mensagem, setMensagem] = useState('');
  
    const mostrarPreco = (tamanhoPizza) => {
        let preco;  

        if(tamanhoPizza === 'pequena'){
            preco = 32;
        }else if(tamanhoPizza === 'média'){
            preco = 65;
        }else if(tamanhoPizza === 'grande'){
            preco = 90;
        }

        setMensagem(`O preço da pizza ${tamanhoPizza} é R$ ${preco},00`);
    };
  
    return (
        <div className='container-exercicio'>
            <Sentenca 
                emoji={'🍕'} 
                sentenca={'1. Crie um programa que permita ao usuário escolher entre três tamanhos de pizza (pequeno, médio e grande) e, com base na escolha, exiba o preço correspondente.'}
            />
            <p>Escolha o tamanho da pizza!</p>
            <div className="container-btn">
                <button className="btn" onClick={() => mostrarPreco('pequena')}>Pequeno</button>
                <button className="btn" onClick={() => mostrarPreco('média')}>Médio</button>
                <button className="btn" onClick={() => mostrarPreco('grande')}>Grande</button>
            </div>
            <div>{mensagem}</div>
        </div>
    );
}