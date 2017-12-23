import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Header, Icon, Modal, Transition, Form, Input, Select, TextArea, Dropdown } from 'semantic-ui-react';

class MyForm extends Component {
	submit(values, dispatch) {
		console.log(values);
	}

	render() {
		return (
			<Transition animation="fade">
				<Modal trigger={<Button>SmartExchange</Button>}>
					<Header content="Create an exchange" />
					<Modal.Content>
						<Form onSubmit={this.submit()}>
							<h3>How much would you like to transfer</h3>
							<Form.group>
								<Field control={Input} label="$" placeholder="You send" /> 
								<Field control={Input} label="$" placeholder="Recipient gets" /> 
							</Form.group>
							<Button type="submit" content='Submit Info' icon='add' labelPosition='right' color="green" />
						</Form>
					</Modal.Content>
					<Modal.Actions>
	
					</Modal.Actions>
				</Modal>
			</Transition>
		);
	}

}

export default reduxForm({
	form: 'Exchange'
})(MyForm);
