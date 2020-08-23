import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { WOW } from 'wowjs';

class Error extends Component {
	componentDidMount() {
		this.props.updateAppClass('Error');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div>
				<h1>Where are you going?</h1>
			</div>
		);
	}
}

export default hot(module)(Error);