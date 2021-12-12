import navstyles from '../../styles/components/layout/style.Nav.css';
import NavLink from	'../NavLink.js';
import {} from "react-router-dom";
const Nav = (props) => {
	return (
	<nav>
		<div className="holder">
		<ul>
			<li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
			<li><NavLink activeClassName="activo" exact to="/Novedades">Novedades</NavLink></li>
			<li><NavLink activeClassName="activo" exact to="/Guia">Guía para nuevos jugadores</NavLink></li>
			<li>
				<div className="dropdown">
  					<NavLink activeClassName="activo" exact to="/Reglas">Reglas del juego</NavLink>
 		 				<div className="dropdown-content">
						    <a>Hechizos</a>
						    <a>Razas</a>
						    <a>Clases</a>
						    <a>Equipo</a>
						    <a>Dotes</a>
						    <a>Trasfondos</a>
						    <a>Objetos mágicos y equipamiento</a>
						    <a>Monstruos y NPCs</a>
			  			</div>
				</div> 
			</li> 
			<li><NavLink activeClassName="activo" exact to="/Contacto">Contacto</NavLink></li>
		</ul>
		</div>
	</nav>
		);
}

export default Nav;
