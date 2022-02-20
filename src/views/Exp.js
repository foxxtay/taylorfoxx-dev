import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Content from '../components/ExpContent/ExpContent';
import { WOW } from 'wowjs';

class Exp extends Component {
	componentDidMount() {
		this.props.updateAppClass('Exp');
		const wow = new WOW({ live: true });
		wow.init();
	}

	render() {
		return(
			<div>
				<Content />
			</div>
		);
	}
}

export default hot(module)(Exp);