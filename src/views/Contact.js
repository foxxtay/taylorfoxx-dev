import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Hero from '../components/AboutHero/AboutHero';
import Content from '../components/ContactContent/ContactContent';
import { WOW } from 'wowjs';

class Contact extends Component {
	componentDidMount() {
		this.props.updateAppClass('Contact');
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

export default hot(module)(Contact);