import './sobre.css'
import Menu from '../../components/menu'
import Qualidade from '../../components/qualidade'
import Footer from '../../components/footer'
import FotoSobre from '../../assets/bg-sobre.jpg'
import FotoSobre2 from '../../assets/equipe-bikcraft.jpg'
function Sobre() {
    
    return(
        <div>
            <Menu></Menu>
            <section className="introducao-interna  interna_sobre">
                <div className="container">
                    <h1>Sobre</h1>
                    <p>conheça mais sobre a bikecraft</p>
                </div>
                
                </section>  
                
                <section className="missao_sobre container">
                        <div className="grid-10">
                            <h2 className="subtitulo-interno">História, Missão e Visão </h2>
                                <p>No mundo atual, a contínua expansão de nossa atividade cumpre um papel
                                    essencial na formulação de gestão inovadora da qual fazemos parte da qual fazemos parte
                                </p>
                                <p>
                                No mundo atual, a contínua expansão de nossa atividade cumpre um papel
                                    essencial na formulação de gestão inovadora da qual fazemos parte da qual fazemos parte
                                </p>
                           
                        </div>
                        <div className="grid-6">
                            <h2 className="subtitulo-interno">Valores</h2>
                            <ul>
                                <li>- Qualidade no processo com</li>
                                <li>- Foco no cliente sem perder a</li>
                                <li>- Diversão, preservando a</li>
                                <li>- Natureza com sustentabilidade</li>
                            </ul>
                        </div>
                        <div className="grid-16 foto-equipe">
                            <img src={FotoSobre2} alt="equipe"></img>
                        </div>
                </section>
            <Qualidade></Qualidade>
            <Footer></Footer>
        </div>
    )
}


export default Sobre