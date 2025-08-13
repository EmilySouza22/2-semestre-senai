import Texto from './Texto'
import Textao from './Textao'
import Titulo from './Titulo'
import Titulo2 from './Titulo2'
import './Corpo.css'

function Corpo() {
  return (
    <div className='corpo-container'> 
        <Titulo/>
        <Titulo2/>
        <Texto/>
        <Textao/>
    </div>
  )
}

export default Corpo