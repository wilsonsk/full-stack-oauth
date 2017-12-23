import React from 'react';

const Landing = () => {
	return (
		<div className={{ display: 'flex', flex-wrap: 'wrap', flex-direction: 'row', align-items: 'center', }}>
			<div>
				<h1>This is a heroshot</h1>	
			</div>
			<div>
				<h1>This is a login CTA</h1>
			</div>
		</div>
	);
};

export default Landing;
