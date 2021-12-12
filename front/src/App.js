import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

import Guia from './pages/Guia'
import Home from './pages/Home'
import Reglas from './pages/Reglas'
import Contacto from './pages/Contacto'
import Novedades from './pages/Novedades'

function App() {
  return (
    <div className="App">
    <div className="background-image"></div>
      <Router>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" exact element= {Home}/>
          <Route path="/Novedades" exact component= {Novedades}/>
          <Route path="/Guia" exact component= {Guia}/>
          <Route path="/Reglas" exact component= {Reglas}/>
          <Route path="/Contacto" exact component= {Contacto}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
