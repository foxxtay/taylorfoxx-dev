import React, { Component } from "react";
import { hot } from "react-hot-loader";
import logo from '../../assets/img/taylor-foxx-icon.svg';

class Content extends Component {
	render() {
		return(
			<div className="Content wow fadeIn">
				<h2>Who am I</h2>
				<p>Hello! My name is Taylor Foxx and I am an Interactive Media Designer and Web Developer living in Charlotte, NC. I grew up as an artist and fell in love with Graphic Design in high school due to my favorite teachers Mr. and Mrs. Soto. It was something that took my favorite things about art and applied it to real world applications. In Fall of 2015, I started at Winthrop University studying Graphic Design.</p><br/>
				<p>As I went through my first semester at Winthrop, I realized that I wanted to do something more with design. I wanted to create interactive experiences for individuals to enjoy, which led me to switching to the Digital Information Design major, an overlap of design and computer science. At Winthrop, I learned how to design websites, develop web-based applications, and play with some of the most forward technologies.</p><br/>
				<p>Now, I am working full-time at <a href="http://www.socialdesign.house" target="_blank">Social Design House</a> as a Developer, where I've learned how to apply and refine my skills. If you have an opportunity available, need some help with your website, or just want to say hey, feel free to e-mail me or shoot me a message anytime via the contact page!</p>
			</div>
		);
	}
}

export default hot(module)(Content);