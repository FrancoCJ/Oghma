import navstyles from '../../styles/components/layout/style.Nav.css';
import NavLink from	'../NavLink.js';
const Nav = (props) => {
	return (
	<nav>
		<div className="holder">
		<ul>
			<li><a href="index.html">Home</a></li>
			<li><a href="novedades.html">Novedades</a></li>
			<li><a className="" href="guiainicio.html">Guía para nuevos jugadores</a></li>
			<li>
				<div className="dropdown">
  					<a href="reglas.html">Reglas del juego</a>
 		 				<div className="dropdown-content">
						    <a href="#">Hechizos</a>
						    <a href="#">Razas</a>
						    <a href="#">Clases</a>
						    <a href="#">Equipo</a>
						    <a href="#">Dotes</a>
						    <a href="#">Trasfondos</a>
						    <a href="#">Objetos mágicos y equipamiento</a>
						    <a href="#">Monstruos y NPCs</a>
			  			</div>
				</div> 
			</li> 
			<li><a href="contacto.html">Contacto</a></li>
		</ul>
		</div>
	</nav>
		);
}

export default Nav;
