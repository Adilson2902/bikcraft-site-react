import './produtos.css'
import bgProdutos from '../../assets/bg-produtos.jpg'
import bgPasseio from '../../assets/produtos/bikcraft-passeio-2.jpg'
import bgPasseio2 from '../../assets/produtos/bikcraft-passeio-1.jpg'
import bgEsporte from '../../assets/produtos/bikcraft-esporte-2.jpg'
import bgEsporte2 from '../../assets/produtos/bikcraft-esporte-1.jpg'
import bgRetro from '../../assets/produtos/bikcraft-retro-2.jpg'
import bgRetro2 from '../../assets/produtos/bikcraft-retro-1.jpg'

import Produto from '../../assets/produtos/passeio.svg'
import Esporte from '../../assets/produtos/esporte.svg'
import Retro from '../../assets/produtos/retro.svg'

import Menu from '../../components/menu'
import Footer from '../../components/footer'

function Produtos() {
    return(
        <div>
            <Menu></Menu>
            <section className="introducao-produto  interna_produto">
                <div className="container">
                    <h1>Produtos</h1>
                    <p>conheça mais sobre nossos produtos</p>
                </div>
                
                </section>  
                
                <section className="container produto_item">
                    <div className="grid-11">
                         <img src={bgPasseio2} alt="Passeio1"></img>
                        <h2>Passeio</h2>
                       
                    </div>
                    <div className="grid-5 produto_icone">
                        <img src={Produto}></img>
                    </div>

                    <div className="grid-8">
                        <img src={bgPasseio}></img>
                    </div>
                    <div className="grid-8 produtos_info">
                       <p>No  mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial
                        na formula de gestão inovadora da qual fazemos parte inovadora da qual fazemos parte
                       </p>
                       <ul>
                           <li>Conforto</li>
                           <li>Velocidade</li>
                           <li>Designe</li>
                           <li>Versatilidade</li>
                       </ul>
                    </div>
                </section>
            
                
                <section className="container produto_item">
                    <div className="grid-11">
                         <img src={bgRetro2} alt="Passeio1"></img>
                        <h2>Passeio</h2>
                       
                    </div>
                    <div className="grid-5 produto_icone">
                        <img src={Retro}></img>
                    </div>

                    <div className="grid-8">
                        <img src={bgRetro}></img>
                    </div>
                    <div className="grid-8 produtos_info">
                       <p>No  mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial
                        na formula de gestão inovadora da qual fazemos parte inovadora da qual fazemos parte
                       </p>
                       <ul>
                           <li>Conforto</li>
                           <li>Velocidade</li>
                           <li>Designe</li>
                           <li>Versatilidade</li>
                       </ul>
                    </div>
                </section>
                    
                <section className="container produto_item">
                    <div className="grid-11">
                         <img src={bgEsporte2} alt="Passeio1"></img>
                        <h2>Esporte</h2>
                       
                    </div>
                    <div className="grid-5 produto_icone">
                        <img src={Esporte}></img>
                    </div>

                    <div className="grid-8">
                        <img src={bgEsporte}></img>
                    </div>
                    <div className="grid-8 produtos_info">
                       <p>No  mundo atual, a contínua expansão de nossa atividade cumpre um papel essencial
                        na formula de gestão inovadora da qual fazemos parte inovadora da qual fazemos parte
                       </p>
                       <ul>
                           <li>Conforto</li>
                           <li>Velocidade</li>
                           <li>Designe</li>
                           <li>Versatilidade</li>
                       </ul>
                    </div>
                </section>
              
                <section className="orcamento">

                    <div className="container">
                        <h2 className="subtitulo">Orçamento</h2>
                        <form id="form_orcamento"  className="grid-8 form">
                             <label form="nome">Nome</label>
                             <input type="text" id="nome" ></input>   
                             <label form="email">E-mail</label>
                             <input type="text" id="e-mail" ></input> 
                             <label form="telefone">Telefone</label>
                             <input type="text" id="telefone" ></input>    
                             <label from="espec">Espeficicações</label>
                             <textarea id="espec"></textarea> 
                             <button type="submit" className="btn">Enviar</button>
                        </form>

                        <div className="orcamento_dados grid-8">
                            <h3>Dados</h3>
                            <span>+55 21 98264 4557</span>
                            <span >orcamento@bikcraft.com</span>
                            <h3>Monte a sua bikcraft</h3>
                            <p>Escolha as especificações</p>
                            <ul>
                                <li>- Cores</li>
                                <li>- Estilo</li>
                                <li>- Medidas</li>
                                <li>- Acessórios</li>
                                <li>- E Outros</li>
                            </ul>

                        </div>
                    </div>

                </section>


                <Footer></Footer>
        </div>
    )
}



export default Produtos