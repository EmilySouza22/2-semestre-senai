import Logo from './Logo'
import './Navbar.css'
import accountLogo from '../assets/user-circle.svg'

function Navbar(){
    return(
        <nav className='navbar-container'> 
            <div> <Logo className='logo-navbar'/> </div>
            <div className='container-topicos'>
                <div className='topic-navbar'>Início</div>
                <div className='topic-navbar'>Sobre</div>
                <div className='topic-navbar'>Promoções</div>
                <div className='topic-navbar'>Contato</div>
            </div>
            <img src={accountLogo} alt="account-logo" className="account-logo"/>
        </nav>
    )
}

export default Navbar