import react from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/bikcraft.svg'
import '../../App.css'
import './menu.css'

function Menu(){

    return(
        <header className="Header">
            
        
            <div className="container">
                <Link to="/" className="grid-4">
                    <img   src={logo} alt="Loading..."></img>
                     </Link>
          
            <nav className="Header_Menu grid-12" >
                <ul>
                    <li>
                        <Link to="/sobre" className="Link">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/produtos" className="Link">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="Link">Portfolios</Link>
                    </li>
                    <li>
                        <Link to="/contato" className="Link">Contato</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}


export default Menu