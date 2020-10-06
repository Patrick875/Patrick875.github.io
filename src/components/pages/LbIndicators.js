//jshint esversion:9
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LbSummary from "./subpages/LbSummary";
import LbLaborforce from "./../pages/subpages/LbLaborforce";
import LbUnempData from "./../pages/subpages/LbUnempData";
import LbSalWag from "./../pages/subpages/LbSalWag";
import LbEmpData from "./../pages/subpages/LbEmpData";

export default function Lbindicators() {
	return (
		<div className="labour-indic">
			<div className="labour-indic-nav">
				<Router>
					<ul className="labour-indic-tabs">
						<li>
							<Link to="/labour-market-indicators">Summary</Link>
						</li>
						<li>
							<Link to="/labour-market-indicators/labor-force">
								Labor Force
							</Link>
						</li>
						<li>
							<Link to="/labour-market-indicators/employment-data">
								Employment Data
							</Link>
						</li>
						<li>
							<Link to="/labour-market-indicators/unemployment-data">
								Unemployment Data
							</Link>
						</li>
						<li>
							<Link to="/labour-market-indicators/salary-wages">
								Salary&Wages
							</Link>
						</li>
					</ul>
					<Switch>
						<Route
							exact
							path="/labour-market-indicators"
							component={LbSummary}
						/>
						<Route
							path="/labour-market-indicators/labor-force"
							component={LbLaborforce}
						/>
						<Route
							path="/labour-market-indicators/employment-data"
							component={LbEmpData}
						/>
						<Route
							path="/labour-market-indicators/unemployment-data"
							component={LbUnempData}
						/>
						<Route
							path="/labour-market-indicators/salary-wages"
							component={LbSalWag}
						/>
					</Switch>
				</Router>
			</div>
		</div>
	);
}
