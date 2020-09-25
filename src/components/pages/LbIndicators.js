//jshint esversion:9
import React from "react";
import KeyLabour from "../general/KeyLabour";

export default function Lbindicators() {
	return (
		<div className="labour-indic">
			<div className="labour-indic-nav">
				<ul>
					<li>Summary</li>
					<li>Labor Force</li>
					<li>Employment Data</li>
					<li>Unemployment Data</li>
					<li>Salary&Wages</li>
				</ul>
			</div>
			<KeyLabour />
			<KeyLabour />
			<KeyLabour />
			<KeyLabour />
		</div>
	);
}
