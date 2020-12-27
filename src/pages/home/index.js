import './home.css'
import react from 'react'
import Menu from '../../components/menu'
import Introducao from '../../components/section_introducao'
import Produtos from '../../components/produtos'
import Portfolio from '../../components/portfolio'
import Qualidade from '../../components/qualidade'
import Footer from '../../components/footer'
function Home(){


    return(
        

        <body>
            <Menu></Menu>
            <Introducao></Introducao>
            <Produtos></Produtos>
            <Portfolio></Portfolio>
            <Qualidade></Qualidade>
            <Footer></Footer>
       </body>
    )
}

export default Home