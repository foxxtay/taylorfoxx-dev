import React, { Component } from "react";
import {hot} from "react-hot-loader";

class PortfolioLink extends Component {
	render() {
		return(
			<div className="PortfolioLink wow fadeIn" data-wow-delay={this.props.delay}>
				<a href={this.props.url}>
					<img src={this.props.logo} />
				</a>
			</div>
		);
	}
}

export default hot(module)(PortfolioLink);