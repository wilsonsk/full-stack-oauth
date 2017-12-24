import React from 'react';
import MyForm from './form/MyForm';

const Landing = () => {
	return (
		<div className={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', }}>
			<div className={{ flex: 1 }}>
				<h1>This is a heroshot</h1>	
			</div>
			<div className={{ flex:1 }}>
				<h1>This is a login CTA</h1>
				<MyForm />
			</div>
		</div>
	);
};

export default Landing;
