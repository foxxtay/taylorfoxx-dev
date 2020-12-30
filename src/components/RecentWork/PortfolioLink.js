import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link, useRouteMatch } from "react-router-dom";

class PortfolioLink extends Component {
	constructor(props) {
		super(props);

		this.portfolioHover = this.portfolioHover.bind(this);
		this.portfolioReset = this.portfolioReset.bind(this);
	}

	portfolioHover(e) {
		e.currentTarget.classList.add("focus");
	}

	portfolioReset(e) {
		e.currentTarget.classList.remove("focus");
	}

	render() {
		return(
			<div className="PortfolioLink wow fadeIn" onMouseOver={ this.portfolioHover } onMouseOut={ this.portfolioReset }>
				<Link to={ this.props.url }>
					<img src={ this.props.logo } alt={ this.props.logoAlt } />
				</Link>
			</div>
		);
	}
}

export default hot(module)(PortfolioLink);