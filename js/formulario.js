const form = document.getElementById('form');

const fields = {
	nombre: document.getElementById('nombre'),
	correo: document.getElementById('correo'),
	telefono: document.getElementById('telefono'),
	asunto: document.getElementById('asunto'),
	mensaje: document.getElementById('mensaje')
};

const errors = {
	nombre: document.getElementById('nombreError'),
	correo: document.getElementById('correoError'),
	telefono: document.getElementById('telefonoError'),
	asunto: document.getElementById('asuntoError'),
	mensaje: document.getElementById('mensajeError')
};

function showError(fieldName, message) {
	fields[fieldName].classList.toggle('is-invalid', Boolean(message));
	errors[fieldName].textContent = message;
}

function validateForm() {
	const values = Object.fromEntries(
		Object.entries(fields).map(([name, field]) => [name, field.value.trim()])
	);
	const namePattern = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phonePattern = /^\d{10}$/;
	const validationErrors = {
		nombre: !values.nombre
			? 'El nombre es obligatorio.'
			: values.nombre.length < 3
				? 'El nombre debe tener al menos 3 caracteres.'
				: !namePattern.test(values.nombre)
					? 'El nombre solo puede contener letras.'
					: '',
		correo: !values.correo
			? 'El correo es obligatorio.'
			: !emailPattern.test(values.correo)
				? 'Ingresa un correo válido.'
				: '',
		telefono: !values.telefono
			? 'El teléfono es obligatorio.'
			: !phonePattern.test(values.telefono)
				? 'El teléfono debe tener exactamente 10 números.'
				: '',
		asunto: !values.asunto
			? 'El asunto es obligatorio.'
			: values.asunto.length < 5
				? 'El asunto debe tener al menos 5 caracteres.'
				: '',
		mensaje: !values.mensaje
			? 'El mensaje es obligatorio.'
			: values.mensaje.length < 10
				? 'El mensaje debe tener al menos 10 caracteres.'
				: ''
	};

	Object.entries(validationErrors).forEach(([fieldName, message]) => {
		showError(fieldName, message);
	});

	return Object.values(validationErrors).every((message) => !message);
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (validateForm()) {
		form.reset();
		Object.keys(fields).forEach((fieldName) => showError(fieldName, ''));
	}
});
