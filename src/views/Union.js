import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Content from '../components/UnionContent/UnionContent';
import { WOW } from 'wowjs';

class Union extends Component {
	componentDidMount() {
		this.props.updateAppClass('Union');
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

export default hot(module)(Union);