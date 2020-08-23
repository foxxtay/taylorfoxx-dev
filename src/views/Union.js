import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Header from "../components/Header/Header";
import Content from '../components/UnionContent/UnionContent';
import { WOW } from 'wowjs';

class Union extends Component {
	componentDidMount() {
		const wow = new WOW({live: true});
		wow.init();
	}

	render() {
		return(
			<div className="Union">
				<Header />
				<Content />
			</div>
		);
	}
}

export default hot(module)(Union);