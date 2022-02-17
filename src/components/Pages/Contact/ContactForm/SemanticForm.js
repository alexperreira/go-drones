import React from 'react';
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react';

const SemanticForm = () => {
	return (
		<Form>
			<Form.Group widths='equal'>
				<Form.Field id='form-input-control-name' />
			</Form.Group>
		</Form>
	);
};

export default SemanticForm;
