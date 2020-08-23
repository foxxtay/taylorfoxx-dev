import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import PortfolioSingle from "./views/PortfolioSingle";
import Contact from "./views/Contact";
import Union from "./views/Union";

class App extends Component {
	render() {
		return(
			<About />
		);
	}
}

export default hot(module)(App);