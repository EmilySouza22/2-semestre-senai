import { Link } from 'react-router-dom';
import 'Navbar.css'

function Navbar() {
  return (
    <nav>
        <img src="" alt="" />
        <div>
            <Link to='/'>Home page</Link>
            <Link to='/construção'>Construção</Link>
            <Link to='/bar'>Bar</Link>
            <Link to='/sorveteria'>Sorveteria</Link>
        </div>

    </nav>
  )
}

export default Navbar