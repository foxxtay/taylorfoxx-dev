import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "./App.scss";
import ReactGa from 'react-ga';

import Header from "./components/Header/Header";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Union from "./views/Union";
import Error from "./views/Error";
import ACreativeCollective from "./views/portfolio-views/ACreativeCollective";
import DODApp from "./views/portfolio-views/DODApp";
import HoopaughGradingCompany from "./views/portfolio-views/HoopaughGradingCompany";
import LocusApp from "./views/portfolio-views/LocusApp";
import TraceyChrisSalon from "./views/portfolio-views/TraceyChrisSalon";
import WheelhouseMedia from "./views/portfolio-views/WheelhouseMedia";
import WinthropSeniorShow from "./views/portfolio-views/WinthropSeniorShow";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { appClass: 'About' };

		ReactGa.initialize('UA-138021131-1');
		ReactGa.pageview(window.location.pathname + window.location.search);
	}

	updateAppClass(className) {
		this.setState({
			appClass: className
		});
	}

	render() {
		return(
			<main className={ this.state.appClass }>
				<Header />
				<Switch>
					<Route path='/' render={() => <About updateAppClass={ this.updateAppClass.bind(this) } />} exact />
					<Route path="/portfolio" render={() => <Portfolio updateAppClass={ this.updateAppClass.bind(this) } />} exact />
					<Route path="/portfolio/1111acreativecollective" render={() => <ACreativeCollective updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path="/portfolio/dodapp" render={() => <DODApp updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path="/portfolio/hoopaughgradingcompany" render={() => <HoopaughGradingCompany updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path="/portfolio/locusapp" render={() => <LocusApp updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path="/portfolio/traceychrissalon" render={() => <TraceyChrisSalon updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path="/portfolio/seniorshowwebsite" render={() => <WheelhouseMedia updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path="/portfolio/wheelhousemedia" render={() => <WinthropSeniorShow updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path='/contact' render={() => <Contact updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route path='/union' render={() => <Union updateAppClass={ this.updateAppClass.bind(this) } />} />
					<Route component={ Error } />
				</Switch>
			</main>
		);
	}
}

export default hot(module)(App);