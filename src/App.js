

import "normalize.css/normalize.css"
import "reset-css/reset.css"
import 'css-grid/src/css-grid.css'
import './App.css'
import {Router,Route,Switch} from 'react-router-dom'
import Home from './pages/home/'
import Sobre from './pages/sobre/'
import Produtos from './pages/produtos/'
import history from './history'
import Portfolio from "./pages/portfolio"
import Contatos from './pages/contato'
function App() {
  return (
  <Router history={history}>
    <Switch>
      <Route exact path="/home"  render={() => <Home></Home>}></Route>
      <Route exact path="/"  render={() => <Home></Home>}></Route>
      <Route exact path="/sobre"  render={() => <Sobre></Sobre>}></Route>
      <Route exact path="/produtos" render={() => <Produtos></Produtos>}></Route>
      <Route exact path="/portfolio" render={() => <Portfolio></Portfolio>}></Route>
      <Route exact path="/contato" render={() => <Contatos></Contatos>}></Route>
    </Switch>
  </Router>
  );
}

export default App;
