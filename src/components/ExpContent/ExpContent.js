import React, { Component } from "react";
import { hot } from "react-hot-loader";

class ExpContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<section className="ExpContent">
				<div class="content-container">
					<h1>Explorations.</h1>
					<p>Coming Soon.</p>
				</div>
			</section>
		);
	}
}

export default hot(module)(ExpContent);