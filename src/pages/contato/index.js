import Menu from '../../components/menu'
import './contato.css'
import Facebook from '../../assets/redes-sociais/facebook.svg'
import Instagram from '../../assets/redes-sociais/instagram.svg'
import Twitter from '../../assets/redes-sociais/twitter.svg'
import Footer from '../../components/footer'

import Mapa from '../../assets/endereco-bikcraft.jpg'
import { Link } from 'react-router-dom'
function Contatos() {
    
    return(
        <div>
        <Menu></Menu>
    <section className="introducao-interna  interna_contato">
                <div className="container">
                    <h1>Portfólio</h1>
                    <p>conheça os projetos que amamos mostrar</p>
                </div>
                
                </section>  
               
                <section className="contato_page container">


  
    <form id="form_orcamento"  className="grid-8 contato-form">
         <label form="nome">Nome</label>
         <input type="text" id="nome" ></input>   
         <label form="email">E-mail</label>
         <input type="text" id="e-mail" ></input> 
         <label form="telefone">Telefone</label>
         <input type="text" id="telefone" ></input>    
         <label from="espec">Espeficicações</label>
         <textarea id="espec"></textarea> 
         <button type="submit" className="btn btn-preto">Enviar</button>
    </form>

    <div className="contato_dados grid-8">
        <h3>Contato Dados</h3>
        <span>+55 21 98264 4557</span>
        <span >orcamento@bikcraft.com</span>
        <span>Rua ali Perto - Botafogo </span>
        <span>Rio de Janeiro - RJ - Brasil</span>
        <h3>Redes Sociais</h3>
        
                        <ul>
                                <li>
                                    <Link to="" className="linki-contato"><img src={Facebook}></img></Link>  
                                    </li>
                                    <li>
                                    <Link to="" className="linki-contato"><img src={Instagram}></img></Link>  
                                    </li>
                                    <li>
                                    <Link to="" className="linki-contato"><img src={Twitter}></img></Link>  
                                    </li>
                                </ul>

    
</div>

</section>

<section className="container contato-mapa"> 
        <Link to=""><img src={Mapa} alt="endereco" className="grid-16"></img> </Link>

</section>

            
        
                <Footer></Footer>
        </div>
    )
}





export default Contatos