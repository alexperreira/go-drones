import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styles from './MyForm.module.css';
import styled from 'styled-components';

const TextGroup = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const EqualDiv = styled.div`
	width: 100%;
`;

const Div = styled.div`
	width: 100%;
	margin: 1rem 2rem;
`;

const maxWidth = {
	maxWidth: 'calc(568px / 2 - 16px)',
};

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='text-input' {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	);
};

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const MyForm = () => {
	return (
		<>
			<Formik
				initialValues={{
					name: '',
					phone: '',
					email: '',
					message: '',
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.max(25, 'Must be 25 characters or less')
						.required('Required'),
					// !Check to see if input needs to be string or number
					phone: Yup.string()
						.min(8, 'Phone number must be 8 digits. 1-555-3333')
						.matches(phoneRegExp, 'Phone number is not valid')
						.required('Required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					message: Yup.string(),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(
							"Thank you for your inquiry. You'll be hearing from us shortly!"
						);
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form
					className={styles.contactForm}
					name='contactForm'
					method='POST'
					data-netlify='
				true'
					action='/'
				>
					<TextGroup>
						<EqualDiv>
							<TextInput
								className={styles.input}
								style={{ ...maxWidth }}
								label='Name'
								name='name'
								type='text'
								placeholder='Name'
							/>
						</EqualDiv>
						<EqualDiv>
							<TextInput
								className={styles.input}
								style={{ ...maxWidth }}
								label='Phone'
								name='phone'
								type='tel'
								placeholder='Phone'
							/>
						</EqualDiv>
					</TextGroup>

					<Div>
						<TextInput
							className={styles.input}
							label='Email'
							name='email'
							type='email'
							placeholder='Email'
						/>
					</Div>

					<Div>
						<TextInput
							className={`${styles.input} ${styles.textArea}`}
							label='Message'
							name='message'
							type='text'
							placeholder="Nothing to say? Just say 'Hi' so we know you're not a robot."
						/>
					</Div>

					<button className={styles.button} type='submit'>
						Let's go!
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default MyForm;
