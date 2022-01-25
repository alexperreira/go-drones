import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		console.log(`
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `);

		e.preventDefault();
	};

	const Div = styled.div`
		margin: auto;
	`;

	const Form = styled.form`
		display: flex;
		flex-direction: column;
		width: 600px;
		min-width: 100px;
		min-height: 400px;
		padding: 1rem 2rem 2rem 2rem;
		box-shadow: 0 0.5rem 2rem #222;
		background-color: #808080;

        input
	`;

	const InputName = styled.input`
		width: 50%;
		border: 2px solid #;
	`;

	return (
		<Div>
			<form onSubmit={handleSubmit} action='submit'>
				<input
					type='text'
					name='name'
					value={name}
					placeholder='Name'
					onChange={(e) => setName(e.target.value)}
					required
				/>

				<input
					type='tel'
					name='phone'
					value={phone}
					placeholder='Phone'
					onChange={(e) => setPhone(e.target.value)}
				/>

				<input
					type='email'
					name='email'
					value={email}
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<input
					type='text'
					name='message'
					value={message}
					placeholder='Anything you want us to know?'
					onChange={(e) => setMessage(e.target.value)}
				/>

				<button>Submit</button>
			</form>
		</Div>
	);
};

export default Form;
