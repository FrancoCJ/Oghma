import './App.css';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import ReactDOM from 'react-dom';



function App() {
  return (
    <div className="App">

    <div className="background-image"></div>
    <Header></Header>
    <Nav></Nav>
    <Footer></Footer>

    </div>
  );
}

export default App;
