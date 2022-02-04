import React from 'react';
import Input from '../../../../UI/Input';

import {
	requiredRule,
	minLengthRule,
	maxLengthRule,
} from './inputValidationRules';

/*
 * creates and returns  object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */

function createFormFieldConfig(label, name, type, defaultValue = '') {
	return {
		renderInput: (handleChange, value, isValid, error, key) => {
			return (
				<Input
					key={key}
					name={name}
					type={type}
					label={label}
					isValid={isValid}
					value={value}
					handleChange={handleChange}
					errorMessage={error}
				/>
			);
		},
		label,
		value: defaultValue,
		valid: false,
		errorMessage: '',
		touched: false,
	};
}

// object representation of signup form
export const contactForm = {
	name: {
		...createFormFieldConfig('Name', 'name', 'text'),
		validationRules: [
			requiredRule('name'),
			minLengthRule('name', 3),
			maxLengthRule('name', 25),
		],
	},
	phone: {
		...createFormFieldConfig('Phone', 'phone', 'tel'),
		validationRules: [
			requiredRule('phone'),
			minLengthRule('phone', 10),
			maxLengthRule('phone', 11),
		],
	},
	email: {
		...createFormFieldConfig('Email', 'email', 'email'),
		validationRules: [
			requiredRule('email'),
			minLengthRule('email', 10),
			maxLengthRule('email', 40),
		],
	},
	message: {
		...createFormFieldConfig(
			'Nothing to say? Just say "Hi" so we know you\'re not a robot.',
			'message',
			'text'
		),
		validationRules: [
			requiredRule('message'),
			minLengthRule('message', 2),
			maxLengthRule('message', 200),
		],
	},
};
