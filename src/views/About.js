import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Header from "../components/Header/Header";
import Hero from '../components/HeroAbout/HeroAbout';
import Content from '../components/ContentAbout/ContentAbout';
import { WOW } from 'wowjs';

class App extends Component {
	componentDidMount() {
		const wow = new WOW({live: true});
		wow.init();
	}

	render() {
		return(
			<div>
				<Header />
				<Hero />
				<Content />
			</div>
		);
	}
}

export default hot(module)(App);