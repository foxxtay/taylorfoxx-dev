import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link, useRouteMatch } from "react-router-dom";

class PortfolioLink extends Component {
	render() {
		return(
			<div className="PortfolioLink wow fadeIn" data-wow-delay={ this.props.delay }>
				<Link to={ this.props.url }>
					<img src={ this.props.logo } />
				</Link>
			</div>
		);
	}
}

export default hot(module)(PortfolioLink);