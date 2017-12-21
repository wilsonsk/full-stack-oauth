import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component { 
	render() {
		return (
			<StripeCheckout 
				name="SmartExchange"
				description="$1 for Int'l Exchange"
				amount={100}
				token={token => console.log(token)}
				stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
			>
				<button className="btn">
					Transfer Money
				</button>
			</StripeCheckout>
		);
	}

}

export default Payments;
