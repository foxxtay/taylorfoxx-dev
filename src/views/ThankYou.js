import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Content from '../components/ThankYouContent/ThankYouContent';
import { WOW } from 'wowjs';

class ThankYou extends Component {
	componentDidMount() {
		this.props.updateAppClass('ThankYou');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<Content />
		);
	}
}

export default hot(module)(ThankYou);