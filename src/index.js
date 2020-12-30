import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import './assets/fonts/Barlow-Regular.otf';
import './assets/fonts/BarlowCondensed-Regular.otf';
import './assets/fonts/Qualy.otf';

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);