import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import useForm from './useForm';
import { contactForm } from './utils/formConfig';
import styles from './ContactForm.module.css';
import SuccessModal from './SuccessModal';

const ContactForm = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [success, setSuccess] = useState(false);
	const { renderFormInputs, isFormValid } = useForm(contactForm);

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	setIsOpen(true);
	// 	setSuccess(true);
	// };
	useEffect(() => {
		if (window.location.search.includes('sucess=true')) {
			setSuccess(true);
		}
	}, []);

	return (
		<>
			{success && (
				<SuccessModal
					success={success}
					open={isOpen}
					onClose={() => setIsOpen(false)}
				/>
			)}
			<div className={styles.container}>
				<form
					// onSubmit={console.log('hello')}
					className={styles.contactForm}
					name='contactform'
					method='POST'
					data-netlify='true'
					action='/contact/?success=true'
				>
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
			</div>
		</>
	);
};

export default ContactForm;
