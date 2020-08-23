import React, { Component } from "react";
import {hot} from "react-hot-loader";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import PortfolioSingle from "./views/PortfolioSingle";
import Contact from "./views/Contact";
import Union from "./views/Union";
import Error from "./views/Error";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {appClass: 'About'};
	}

	updateAppClass(className) {
		this.setState({
			appClass: className
		});
	}

	render() {
		return(
			<main className={this.state.appClass}>
				<Header />
				<Switch>
					<Route path='/' render={() => <About updateAppClass={this.updateAppClass.bind(this)} />} exact />
					<Route path="/portfolio" render={() => <Portfolio updateAppClass={this.updateAppClass.bind(this)} />} />
					<Route path='/contact' render={() => <Contact updateAppClass={this.updateAppClass.bind(this)} />} />
					<Route path='/union' render={() => <Union updateAppClass={this.updateAppClass.bind(this)} />} />
					<Route component={Error} />
				</Switch>
			</main>
		);
	}
}

export default hot(module)(App);