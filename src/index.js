import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);