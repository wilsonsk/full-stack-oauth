import React from 'react';
import MyForm from './form/MyForm';

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
		<div className={gridStyle}>
			<div className={cellStyle}>
				<h1>This is a heroshot</h1>	
			</div>
			<div className={cellStyle}>
				<h1>This is a login CTA</h1>
				<MyForm />
			</div>
		</div>
	);
};

export default Landing;
