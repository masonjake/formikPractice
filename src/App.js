import React from 'react';
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
	// TODO: add a const called formik assigned to useFormik()
	const formik = useFormik({
		initialValues: { email: '', password: '' },
		onSubmit: (values) => {
			if (formik.isValid) alert('Login successful!');
		},
		validate: (values) => {
			let errors = {};
			if (!values.email) errors.email = 'field required';
			if (!values.password) errors.password = 'field required';
			return errors;
		},
	});

	return (
		<div>
			<h1>Formik Form!</h1>
			<h5>Enter login credentials:</h5>
			<form onSubmit={formik.handleSubmit}>
				<div>Email:</div>
				<input
					type="text"
					name="email"
					id="emailField"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.errors.email ? (
					<div style={{ color: 'red' }}> {formik.errors.email}</div>
				) : null}
				<div>Password:</div>
				<input
					type="password"
					name="password"
					id="pswField"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{formik.errors.password ? (
					<div style={{ color: 'red' }}> {formik.errors.password}</div>
				) : null}
				<div style={{ paddingTop: '10px' }}></div>
				<button type="submit" id="submitBtn">
					Submit
				</button>
			</form>
		</div>
	);
}

export default App;
