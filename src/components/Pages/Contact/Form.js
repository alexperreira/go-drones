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
		margin: 0.5rem auto;
	`;

	const TopLineDiv = styled.div`
		display: flex;
		justify-content: space-evenly;

		input {
			width: 100%;
		}
	`;

	const Input = styled.input`
		background: transparent;
		border: 1px solid #808080;
		margin: 1rem;
		padding: 0.5rem;
		height: 2rem;
		width: auto;
		color: #808080;
	`;

	const Form = styled.form`
		display: flex;
		flex-direction: column;
		width: 600px;
		min-width: 100px;
		min-height: 400px;
		padding: 1rem 2rem 2rem 2rem;
		margin-top: 5rem;
		box-shadow: 0 0.5rem 2rem #222;
		background-color: transparent;
	`;

	const Button = styled.button`
		width: 12rem;
		height: 4rem;
		font-family: 'Avenir Next Heavy';
		font-size: 2rem;
		text-transform: uppercase;
		color: #fff;
		margin: 1rem auto;
		background: #2b93d1;
		border: none;
	`;

	return (
		<Div>
			<Form onSubmit={handleSubmit} action='submit'>
				<TopLineDiv>
					<Input
						type='text'
						name='name'
						value={name}
						placeholder='Name'
						onChange={(e) => setName(e.target.value)}
						required
					/>

					<Input
						type='tel'
						name='phone'
						value={phone}
						placeholder='Phone'
						onChange={(e) => setPhone(e.target.value)}
					/>
				</TopLineDiv>

				<Input
					type='email'
					name='email'
					value={email}
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<Input
					type='text'
					name='message'
					value={message}
					placeholder='Anything you want us to know?'
					onChange={(e) => setMessage(e.target.value)}
				/>

				<Button>Let's go!</Button>
			</Form>
		</Div>
	);
};

export default Form;
