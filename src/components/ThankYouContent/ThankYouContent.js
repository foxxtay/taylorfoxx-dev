import React, { Component } from "react";
import { hot } from "react-hot-loader";

class ThankYouContent extends Component {
	render() {
		return(
			<section className="ThankYouContent wow fadeIn">
				<h1>Thank You for Reaching Out</h1>
				<p>You should hear back from me soon. I hope you are doing well and I appreciate you reaching out!</p>
			</section>
		);
	}
}

export default hot(module)(ThankYouContent);