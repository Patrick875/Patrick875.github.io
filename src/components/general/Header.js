//jshint esversion:9
import React from "react";
import logo from "./../../images/Group 69.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import svg from "./../../images/Group 65.svg";
export default function Header() {
	return (
		<div className="header">
			<nav className="header_nav">
				<div className="header_top_logo">
					<Link to="/">
						<img src={logo} height="120" width="120" alt="LMIS LOGO" />
					</Link>
				</div>
				<div className="header_top_links">
					<ul>
						<Link to="/login">
							<li>Home</li>
						</Link>
						<Link to="/signup">
							<li>Labour Market Indicators</li>
						</Link>
						<Link>
							<li>Resources</li>
						</Link>
						<Link>
							<li>About LMis</li>
						</Link>
					</ul>
				</div>
				<div className="header-top_login">
					<button className="language">en</button>
					<button>Login</button>
					<button>Sign in</button>
				</div>
			</nav>
		</div>
	);
}
