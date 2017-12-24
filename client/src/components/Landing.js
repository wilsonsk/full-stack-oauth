import React from 'react';
import MyForm from './form/MyForm';
import { Grid } from 'semantic-ui-react';

const gridStyle = {
	display: 'flex',
	margin: '-10px 0 10px -10px',
};

const cellStyle = {
	padding: '10px 0 0 10px',
	height: '100%',
	background: 'blue',
	padding: '10px'
};

const Landing = () => {
	return (
		<Grid divided='vertically'>
			<Grid.Row columns={2}>
				<Grid.Column>
					<h1>This is a heroshot</h1>	
				</Grid.Column>
				<Grid.Column>
					<MyForm />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Landing;
