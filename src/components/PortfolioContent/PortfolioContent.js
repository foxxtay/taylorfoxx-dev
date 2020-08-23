import React, { Component } from "react";
import {hot} from "react-hot-loader";
import { WOW } from 'wowjs';

class PortfolioContent extends Component {
	render() {
		return(
			<div className="PortfolioContent">
				<h2 className="back-button"><a href="/portfolio">&lt; back</a></h2>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
				<div className="header-shot">
					<div>
						<img src={this.props.headerFull} />
					</div>
				</div>
				<div className="header-shot split">
				<div>
						<img src={this.props.headerLeft} />
					</div>
					<div>
						<img src={this.props.headerRight} />
					</div>
				</div>
				<div className="project-content">
					<div className="content">
						{this.props.content}
					</div>
					{/* <iframe width="438" height="930" src="//invis.io/Q5RAHLLPY4J" frameborder="0" allowfullscreen></iframe> */}
				</div>
			</div>
		);
	}
}

export default hot(module)(PortfolioContent);