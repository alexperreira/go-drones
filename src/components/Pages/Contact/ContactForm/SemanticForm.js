import React from 'react';
import { Form } from 'semantic-ui-react';

const SemanticForm = () => {
	return (
		<Form>
			<Form.Group widths='equal'>
				<Form.Input fluid label='Name' placeholder='Name' />
				<Form.Input fluid label='Phone' placeholder='Phone' />
			</Form.Group>
			<Form.Input fluid label='email' />
			<Form.TextArea
				label='About'
				placeholder='Anything you want us to know before we reach out?'
			/>
			<Form.Button>Let's Go!</Form.Button>
		</Form>
	);
};

export default SemanticForm;
