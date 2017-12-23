import React from 'react';
import Form from './Form';

const Landing = () => {
	return (
		<div className={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', }}>
			<div>
				<h1>This is a heroshot</h1>	
			</div>
			<div>
				<h1>This is a login CTA</h1>
				<Form />
			</div>
		</div>
	);
};

export default Landing;
