//jshint esversion:9
import React from "react";
import logo from "./../../images/LMIS Blue (1).png";
import { Link } from "react-router-dom";
export default function () {
	return (
		<div className="header">
			<div className="header_top">
				<div className="header_top_logo">
					<Link to="/">
						<img src={logo} />
					</Link>
				</div>
				<div className="header_top_links">
					<ul>
						<Link to="/login">
							<li>LOGIN</li>
						</Link>
						<Link to="/signup">
							<li>SIGNUP</li>
						</Link>
						<li>English</li>
					</ul>
				</div>
			</div>
			<div className="header_bottom">
				<div className="header_bottom_links">
					<ul>
						<li>
							<Link to="/" className="link">
								HOME
							</Link>
						</li>
						<li>
							<Link to="/labour-market-indicators" className="link">
								LABOUR MARKET INDICATORS
							</Link>
						</li>
						<li>
							<Link to="/resources" className="link">
								RESOURCES
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
