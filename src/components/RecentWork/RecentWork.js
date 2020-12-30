import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { portfolioData } from '../../data/portfolio';
import PortfolioLink from './PortfolioLink';

const portfolioLinks = portfolioData.map((portfolio) =>
	<PortfolioLink url={ portfolio.url } logo={ portfolio.logo } logoAlt={ portfolio.logoAlt } key={ portfolio.title } />
);

class RecentWork extends Component {
	render() {
		return(
			<section className="RecentWork">
				<h1 className="wow fadeIn">Recent work</h1>
				<div className="portfolio-links">
					{ portfolioLinks }
				</div>
			</section>
		);
	}
}

export default hot(module)(RecentWork);