import react from 'react'
import { Link } from 'react-router-dom'
import './section_introducao.css'

function Introducao(){
    return(
        <section className='introducao'>
            <div className="container ">
        <h1>Bicicletas Feitas a mão</h1>
        <div className="text">
        <blockquote className="quote-externo ">    
            <p>"Não tenha nada em sua casa que você não considere útil ou acredita ser bonito"
            </p>

            <cite>William Morris</cite>
        </blockquote>
       
       <Link className="btn ">Orçamento</Link>
       </div>
        </div>
        </section>
    )
}


export default Introducao

