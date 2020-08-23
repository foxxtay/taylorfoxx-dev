import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Hero from '../components/HeroAbout/HeroAbout';
import Content from '../components/ContentAbout/ContentAbout';
import { WOW } from 'wowjs';

class About extends Component {
	componentDidMount() {
		this.props.updateAppClass('About');
		const wow = new WOW({live: true});
		wow.init();
	}

	render() {
		return(
			<div>
				<Hero />
				<Content />
			</div>
		);
	}
}

export default hot(module)(About);