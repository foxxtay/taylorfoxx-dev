import React, { Component } from "react";
import {hot} from "react-hot-loader";
import RecentWork from '../components/RecentWork/RecentWork';
import { WOW } from 'wowjs';

class Portfolio extends Component {
	componentDidMount() {
		this.props.updateAppClass('Portfolio');
		const wow = new WOW({live: true});
		wow.init();
	}

	render() {
		return(
			<div>
				<RecentWork />
			</div>
		);
	}
}

export default hot(module)(Portfolio);