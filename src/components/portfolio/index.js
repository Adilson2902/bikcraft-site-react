import react from 'react'
import './portfolio.css'
import esportes from '../../assets/portfolio/esporte.jpg'
import passeio from '../../assets/portfolio/passeio.jpg'
import retro from '../../assets/portfolio/retro.jpg'
import { Link } from 'react-router-dom'

function Portfolio(){

    return(
        <section className="portfolio">
            <div className="container">
                <h2 className="subtitulo">Portfólio</h2>
          
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


            <div className="call">
                <p>conheça mais nosso portfólio</p>
                <Link className="btn ">Portfólio</Link>
            </div>
            </div>

        </section>
    )
}


export default Portfolio