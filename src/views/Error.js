import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { WOW } from 'wowjs';

class Error extends Component {
	componentDidMount() {
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div className="Error">
				<h1>Did the redirect break again?</h1>
				<p>You're not supposed to see this page, but something messed up! Use any of those links above to get back on track.</p><br />
				<p>PS, thanks for checking out my website! It really means a lot to me, so feel free to send me a quick message and say hello.</p>
			</div>
		);
	}
}

export default hot(module)(Error);