import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Header from "../components/Header/Header";
import RecentWork from '../components/RecentWork/RecentWork';
import { WOW } from 'wowjs';

class Portfolio extends Component {
	componentDidMount() {
		const wow = new WOW({live: true});
		wow.init();
	}

	render() {
		return(
			<div className="Portfolio">
				<Header />
				<RecentWork />
			</div>
		);
	}
}

export default hot(module)(Portfolio);