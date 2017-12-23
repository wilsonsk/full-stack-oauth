import React from 'react';
import MyForm from './MyForm';

const Landing = () => {
	return (
		<div className={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', }}>
			<div>
				<h1>This is a heroshot</h1>	
			</div>
			<div>
				<h1>This is a login CTA</h1>
				<MyForm />
			</div>
		</div>
	);
};

export default Landing;
