//jshint esversion:9
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import LbIndicators from "./components/pages/LbIndicators";
import Resources from "./components/pages/Resources";
import LoginForm from "./components/general/LoginForm";
import SignUp from "./components/general/SignUp";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/labour-market-indicators" component={LbIndicators} />
					<Route path="/resources" component={Resources} />
					<Route path="/login" component={LoginForm} />
					<Route path="/signup" component={SignUp} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
