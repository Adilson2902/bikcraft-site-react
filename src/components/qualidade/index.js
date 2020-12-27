import './qualidade.css'
import qualidade from '../../assets/bikcraft-qualidade.svg'
import { Link } from 'react-router-dom'



function Qualidade() {
    return(
     <section className="qualidade container">
        <h2 className="subtitulo">Qualidade</h2>
        <img src={qualidade} alt="bikcraft"></img>

        <ul className="qualidade_lista">
            <li className="grid-1-3">
               <h3>Durabilidade</h3> 
               <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação</p>
            </li>

            <li className="grid-1-3">
               <h3>Designe</h3> 
               <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação</p>
            </li>
            <li className="grid-1-3">
               <h3>Sustentabilidade</h3> 
               <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação</p>
            </li>
        </ul>
        <div className="call">
                <p>conheça mais nossa história</p>
                <Link to="" className="btn btn-preto">Sobre</Link>
            </div>
     </section>
    )
}



export default Qualidade