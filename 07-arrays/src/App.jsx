import { useState } from 'react'
import './App.css'

function App() {
  const [pessoas, setPessoas] = useState([
    {id:1, nome:"Dona Bete", idade: 72},
    {id:2, nome:"Dr Auzio", idade: 78},
    {id:3, nome:"Sarumano", idade: 68},
    {id:4, nome:"Dona Bete", idade: 72},
    {id:5, nome:"Dr Auzio", idade: 78},
    {id:6, nome:"Sarumano", idade: 68},
  ])

  function cadastrar(){
    let pessoa = {
      id: Date.now(),
      nome: Date.now(),
      idade: Date.now()
    }
  }

  return (
    <div>
      <h1>Arrays</h1>
      <button onClick={cadastrar}>Cadastrar</button>
      <div className='container-cards'>
        {pessoas.map((pessoa) => (
          <div key={pessoa.id} className='card-pessoa'>
            <h2>{pessoa.nome}</h2>
            <p>Idade: {pessoa.idade}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
