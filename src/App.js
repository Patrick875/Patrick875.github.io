//jshint esversion:9
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/general/Header";
import HeaderM from "./components/general/HeaderM";
import LbIndicators from "./components/pages/LbIndicators";
import Resources from "./components/pages/Resources";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import withSizes from "react-sizes";

function App({ isMobile }) {
	return (
		<div className="App ">
			<Router>
				{isMobile ? <HeaderM /> : <Header />}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/labour-market-indicators" component={LbIndicators} />
					<Route path="/resources" component={Resources} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
				</Switch>
			</Router>
		</div>
	);
}
const mapSizesToProps = ({ width }) => ({
	isMobile: width < 800,
});
export default withSizes(mapSizesToProps)(App);
