import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

const planet = "Dang";

class App extends Component {
	render() {
		return(
			<div className="App">
				<h1 className="mt-16">Hello, {planet}!</h1>
			</div>
		);
	}
}

export default hot(module)(App);