import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.scss";
import About from "./views/About";

const planet = "Dang";

class App extends Component {
	render() {
		return(
			<About />
		);
	}
}

export default hot(module)(App);