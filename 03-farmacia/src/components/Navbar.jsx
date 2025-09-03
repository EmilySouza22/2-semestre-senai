import Logo from './Logo'
import './Navbar.css'

function Navbar(){
    return(
        <nav className='navbar-container'> 
            <div> <Logo className='logo-navbar'/> </div>
            <div className='container-topicos'>
                <div>Início</div>
                <div>Sobre</div>
                <div>Promoções</div>
                <div>Contato</div>
            </div>
            <div> Conta</div>
        </nav>
    )
}

export default Navbar