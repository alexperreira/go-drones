import React from 'react';
// import { useForm } from 'react-hook-form';
import useForm from './useForm';
import { contactForm } from './utils/formConfig';
import styles from './ContactForm.module.css';

const ContactForm = (props) => {
	const { renderFormInputs, isFormValid } = useForm(contactForm);

	return (
		<>
			<form className={styles.contactForm} name='contactform' method='POST'>
				<input type='hidden' name='form-name' value='contactForm' />
				{renderFormInputs()}
				<button
					// className={styles.button}
					type='submit'
					disabled={!isFormValid()}
				>
					LET'S GO!
				</button>
			</form>
			{/* <Form onSubmit={handleSubmit}>
				<TopLineDiv>
					<Input
						type='text'
						autoFocus='autoFocus'
						ref={nameInputRef}
						name='name'
						value={setName}
						placeholder='Name'
						// onChange={nameInputChangeHandler}
						required
					/>

					<Input
						type='tel'
						autoFocus='autoFocus'
						ref={phoneInputRef}
						name='phone'
						value={phone}
						placeholder='Phone'
						// onChange={phoneInputChangeHandler}
					/>
				</TopLineDiv>

				<Input
					type='email'
					autoFocus='autoFocus'
					ref={emailInputRef}
					name='email'
					value={email}
					placeholder='Email'
					// onChange={emailInputChangeHandler}
					required
				/>

				<Input
					type='text'
					autoFocus='autoFocus'
					ref={messageInputRef}
					name='message'
					value={message}
					onBlur
					placeholder='Anything you want us to know?'
					// onChange={messageInputChangeHandler}
				/>

				<Button>Let's go!</Button>
			</Form> */}
		</>
	);
};

export default ContactForm;
