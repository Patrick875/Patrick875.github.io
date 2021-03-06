//jshint esversion:9
import React from "react";
import logo from "./../../images/SNOWWHITE LMIS copy.png";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Header() {
	return (
		<div className="header">
			<div className="header_top">
				<div className="header_top_logo">
					<Link to="/">
						<img src={logo} height="120" width="120" alt="LMIS LOGO" />
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
						<li>
							<select name="cars" id="cars" style={{ border: "none" }}>
								<option value="english">English</option>
								<option value="french">French</option>
							</select>
						</li>
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
