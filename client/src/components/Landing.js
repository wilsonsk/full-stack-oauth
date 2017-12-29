import React from 'react';
import MyForm from './form/MyForm';

const Landing = () => {
	return (
		<div style={{ display: 'flex', border: 'solid', alignItems: 'center'}}>
				<div style={{ border: 'solid', flex: '1.618', flexDirection: 'column' }}>
					<h1>This is a heroshot</h1>	
				</div>
				<div style={{ border: 'solid', flex: '1', flexDirection: 'column' }}>
					<MyForm />
				</div>
		</div>
	);
};

export default Landing;
