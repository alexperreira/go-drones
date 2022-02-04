import React from 'react';

import styles from './Input.module.css';

function InputField(props) {
	const { label, type, name, handleChange, errorMessage, isValid, value } =
		props;

	return (
		<div className={styles.container}>
			<label htmlFor='input'>{name}</label>
			<input
				className={styles.input}
				type={type}
				name={name}
				value={value}
				placeholder={label}
				onChange={handleChange}
			/>
			{errorMessage && !isValid && (
				<span className={styles.error}>{errorMessage}</span>
			)}
		</div>
	);
}

export default React.memo(InputField);
