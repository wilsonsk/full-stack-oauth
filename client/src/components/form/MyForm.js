import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import formFields from './formFields';

import * as actions from '../../actions';

class MyForm extends Component {
	handleSubmit() {
		

	}

	renderFields() {
		return formFields.map(({ label, name }) => {
			return (
				<Field
					key={name}
					component={MyField}
					type="text"
					label={label}
					name={name}
				/>
			);			
		});
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.renderFields()}
				<button type="submit">Try</button>
			</form>
		);
	}
}
export default connect(null, actions)(MyForm);
