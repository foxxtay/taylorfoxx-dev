import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Content from '../components/PortfolioContent/PortfolioContent';
import { WOW } from 'wowjs';

class PortfolioSingle extends Component {
	componentDidMount() {
		const wow = new WOW({live: true});
		wow.init();
	}

	render() {
		return(
			<div className="PortfolioSingle">
				<Content />
			</div>
		);
	}
}

export default hot(module)(PortfolioSingle);