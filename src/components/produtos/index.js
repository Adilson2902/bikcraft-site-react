import './product.css'
import Produto from '../../assets/produtos/passeio.svg'
import Esporte from '../../assets/produtos/esporte.svg'
import Retro from '../../assets/produtos/retro.svg'
import { Link } from 'react-router-dom'
function Produtos(){

    return(
        <section className="produtos produtos_container container">
            <h2 className="subtitulo">Produtos</h2>

            <ul className="produtos_lista">
                <li className="grid-1-3">
                    <div className="produtos_icones">
                    <img src={Produto} alt="bikcraft passeio"></img>
                    </div>
                    <h3>Passeio</h3>
                    <p>Ainda sim, existem dúvidas a respeito de com a necessidade de renovação</p>
                </li>

                <li className="grid-1-3">
                <div className="produtos_icones">
                    <img src={Esporte} alt="Esportes"></img>
                    </div>
                    <h3>Esporte</h3>
                    <p>Ainda sim, existem dúvidas a respeito de com a necessidade de renovação</p>
                </li>
                <li className="grid-1-3">
                <div className="produtos_icones">
                    <img src={Retro} alt="Retro"></img>
                    </div>
                    <h3>Retro</h3>
                    <p>Ainda sim, existem dúvidas a respeito de com a necessidade de renovação</p>
                </li>
            </ul>
            <div className="call">
                <p>clique aqui e veja os detalhes dos produtos </p>
                <Link to="" className="btn btn-preto">Produtos</Link>
            </div>
        </section>
    )

}


export default Produtos