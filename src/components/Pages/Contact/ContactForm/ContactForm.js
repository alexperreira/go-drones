import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import useForm from './useForm';
import { contactForm } from './utils/formConfig';
import styles from './ContactForm.module.css';
import SuccessModal from './SuccessModal';

const ContactForm = (props) => {
	const [success, setSuccess] = useState(false);
	const { renderFormInputs, isFormValid } = useForm(contactForm);

	useEffect(() => {
		if (window.location.search.includes('sucess=true')) {
			setSuccess(true);
		}
	}, []);

	return (
		<>
			{success && <SuccessModal />}
			<div className={styles.container}>
				<form
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
