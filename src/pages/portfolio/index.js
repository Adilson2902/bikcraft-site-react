import Footer from '../../components/footer'
import Menu from '../../components/menu'
import esportes from '../../assets/portfolio/esporte.jpg'
import passeio from '../../assets/portfolio/passeio.jpg'
import retro from '../../assets/portfolio/retro.jpg'
import './portfolio.css'
import { Link } from 'react-router-dom'


function Portfolio() {
    return(
        <div>
    <Menu></Menu>
    <section className="introducao-interna  interna_portfolio">
                <div className="container">
                    <h1>Portfólio</h1>
                    <p>conheça os projetos que amamos mostrar</p>
                </div>
                
                </section>  
                <section className="container">
                    <blockquote  className="quote_clientes">
                        <p>"No mundo atual , a contínua expansão de nossa atividade cumpre um papel essencial
                            na formulação de gestão inovadora ao qual fazemos parte."
                        </p>
                        <cite>
                            Barbara Moss
                        </cite>
                    </blockquote>
                </section>



                <section className="portfolio">
            <div className="container">
               
          
            <ul className="ul-portfolio">
                <li className="grid-8">
                    <img src={retro} alt="retro"></img>
                </li>
                <li className="grid-8">
                    <img src={passeio} alt="passeio"></img>
                </li>
                <li className="grid-16 ">
                    <img src={esportes} alt="esportes"></img>
                </li>
            </ul>


           
            </div>

        </section>
      

                <Footer></Footer>
    </div>)
}




export default Portfolio