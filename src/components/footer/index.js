import './footer.css'
import Facebook from '../../assets/redes-sociais/facebook.svg'
import Instagram from '../../assets/redes-sociais/instagram.svg'
import Twitter from '../../assets/redes-sociais/twitter.svg'
import { Link } from 'react-router-dom'


function Footer() {
    return(
        <div>
       <section className="quebra ">
      
           <blockquote className="quote-externo-footer  container">    
            <p>"o verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana"
            </p>

            <cite>William Morris</cite>
        </blockquote>
       </section>

       <footer>
           <div className="footer">
                <div className="container">
                    <div  className="grid-8 footer-historia">
                        <h3>Nossa História</h3>
                        <p>o verdadeiro segredo da felicidade está em ter um genuino interesse por todos os detalhes da vida cotidiana cotidiana

                        </p>
                    </div>

                    <div className="grid-4 footer-contato">
                        <h3 >
                            Contato
                        </h3>
                        <ul>
                            <li>
                           - 21 23232-4343
                            </li>
                            <li>
                               - contato-bikcraft.com
                            </li>
                            <li>
                            -  Botafogo-RJ  
                            </li>
                        </ul>
                    </div>

                    <div className="grid-4 footer-redes">
                            <h3>Redes Sociais</h3>
                            <ul>
                                <li>
                                <Link to="" className="linki"><img src={Facebook}></img></Link>  
                                </li>
                                <li>
                                <Link to="" className="linki"><img src={Instagram}></img></Link>  
                                </li>
                                <li>
                                  <Link to="" className="linki"><img src={Twitter}></img></Link>  
                                </li>
                            </ul>
                    </div>
                </div>
           </div>

               <div className="copy">
                   <div className="container">
                   <p className="grid-16 pzin">Brikcraft 2020 - Alguns direitos reservados</p>
                   </div>
                   </div> 

       </footer>
       </div>
    )
}

export default Footer