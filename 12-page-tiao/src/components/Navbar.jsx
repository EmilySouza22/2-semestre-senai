import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <div>
            <Link to='/'>Home page</Link>
            <Link to='/construcao'>Construção</Link>
            <Link to='/bar'>Bar</Link>
            <Link to='/sorveteria'>Sorveteria</Link>
        </div>
    </nav>
  )
}

export default Navbar