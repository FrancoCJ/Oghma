import '../styles/components/pages/style.Contacto.css';
import React, { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {
	const initialForm = {
		nombre: '',
		correo: '',
		mensaje: ''
	}
	const [sending, setSending] = useState(false);
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState(initialForm);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(oldData => ({
			...oldData,
			[name]: value
		}));
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setMsg('');
		setSending(true)
		const response = await
		console.log(formData)
		axios.post('http://localhost:3000/api/contacto', formData);
		setSending(false);
		setMsg(response.data.message);
		if (response.data.error === false) {
			setFormData(initialForm)
		}
	}

	return (
		<main className='holderContacto'>
			<div className='formContacto'>
				<h2>Contacto</h2>
				<form action="/contacto" method="post" className='formulario' onSubmit={handleSubmit}>
					<p>
						<label for="nombre">Nombre</label><br/>
						<input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
					</p>
					<p>
						<label for="email">Email</label><br/>
						<input type="text" name="email" value={formData.email} onChange={handleChange}/>
					</p>
					<p>
						<label for="mensaje">Comentario</label> <br/>
						<textarea name="mensaje" value={formData.mensaje} onChange={handleChange}/>
					</p>
					{sending ? <p>Enviando...</p> : null}
					{msg ? <p>{msg}</p> : null}
					<p className='centrar'><input type="submit" value="Enviar" /></p>
				</form>
			</div>
		</main>
	)
}

export default Contacto;

