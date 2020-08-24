import React, { Component } from "react";
import { hot } from "react-hot-loader";
import logo from '../../assets/img/taylor-foxx-icon.svg';

class AboutHero extends Component {
	constructor(props) {
		super(props);

		this.state = { highlight: false };
		this.heroHighlight = this.heroHighlight.bind(this);
		this.heroReset = this.heroReset.bind(this);
	}

	heroHighlight(e) {
		this.setState({
			highlight: true
		});
		e.target.style.color = "white";
		e.target.style.transition = "color .5s";
	}

	heroReset(e) {
		this.setState({
			highlight: false
		});
		e.target.style.color = "unset";
		e.target.style.transition = "unset";
	}

	render() {
		return(
			<section className="AboutHero">
				<h1 className={ this.state.highlight ? "wow fadeIn highlight" : "wow fadeIn" }>Hello.<br/>My name is <span onMouseOver={ this.heroHighlight } onMouseOut={ this.heroReset }>Taylor Foxx</span>. I am an <span onMouseOver={ this.heroHighlight } onMouseOut={ this.heroReset }>Interactive Media Designer</span> and <span onMouseOver={ this.heroHighlight } onMouseOut={ this.heroReset }>Developer</span>.</h1>
				<div className="logo wow fadeIn">
					<img src={ logo } />
				</div>
			</section>
		);
	}
}

export default hot(module)(AboutHero);