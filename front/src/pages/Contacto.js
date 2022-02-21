import '../styles/components/pages/style.Contacto.css';

const Contacto = (props) => {
	return (
<main className="contacto">
<br></br>
		<div className="Formulario">
			<form action="https://formsubmit.co/05a2ec389c4f297f150b1e3219dd5521" method="POST">
				<input type="hidden" name="_next" value="contacto.html"></input>
				<input type="hidden" name="_template" value="box"></input>
				<input type="hidden" name="_captcha" value="false"></input>
				<input type="text" name="name" placeholder="Nombre" required></input>
				<input type="email" name="mail" placeholder="Correo Electronico"></input>
				<textarea id="subject" name="subject" placeholder="Escribe tu mensaje" ></textarea>
				<div>&nbsp;</div>
				<button className="fcf-btn" type="submit">Enviar</button>
				<div>&nbsp;</div>
			</form>
		</div>
</main>
		);
}

export default Contacto;

