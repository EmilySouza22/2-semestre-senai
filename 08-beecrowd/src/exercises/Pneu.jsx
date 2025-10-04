/* Calibrar os pneus do carro deve ser uma tarefa cotidiana de todos os motoristas. 
Ao ser ligada ao pneu, a bomba primeiro lê a pressão atual e calcula a diferença de pressão entre a desejada e a lida. 
Com esta diferença ela esvazia ou enche o pneu para chegar na pressão correta.

Escreva um programa que, dada a pressão desejada digitada pelo motorista e a pressão do pneu lida pela bomba, 
indica a diferença entre a pressão desejada e a pressão lida. */

/*
- Entrada
A primeira linha da entrada contém um inteiro N que indica a pressão desejada pelo motorista (1 ≤ N ≤ 40). 
A segunda linha contém um inteiro M que indica a pressão lida pela bomba (1 ≤ M ≤ 40).

- Saída
Seu programa deve imprimir uma única linha, contendo a diferença entre a pressão desejada e a pressão lida. */

import React, { useState } from 'react';

function BombaDeAr() {
	const [desejada, setDesejada] = useState('');
    const [lida, setLida] = useState('');
    const [diferenca, setDiferenca] = useState();
    
    function calcularValor(){
        const resultado = desejada - lida
        setDiferenca(resultado);
    }

    return (
        <div className='container'>
            <h2>Bomba de ar</h2>
            Pressão desejada:
            <input value={desejada} onChange={e => setDesejada(e.target.value)} />
            Pressão lida:
            <input value={lida} onChange={e => setLida(e.target.value)} />
            <button onClick={calcularValor}>Calcular</button>
            <p>Diferença: {diferenca}</p>
        </div>
    )
}

export default BombaDeAr;
