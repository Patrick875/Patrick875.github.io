//jshint esversion:9

import React, { Fragment } from "react";
import DataElement from "./DataElement";
import { Link } from "react-router-dom";

export default function KeyLabour(props) {
	const table = props.data.map((key) => (
		<React.Fragment>
			<DataElement title={{ title: key.title, number: key.data }}>
				<p>{key.description}</p>
				<ul>
					<li>
						<Link to="#">read more</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
		</React.Fragment>
	));

	console.log(table);
	return (
		<div className="key-labour">
			<h3>{props.title}</h3>
			{table}
		</div>
	);
}

// let nfObject = new Intl.NumberFormat("en-US");
// const population = {
// 	number: nfObject.format(3589583),
// 	text: "Population of Rwanda",
// 	percentage: "+(0.34)",
// 	date: "August 2020",
// };
// const unemploymentRateByAge = {
// 	number: nfObject.format(3589583),
// 	text: "Unemployment Rate By Age",
// 	percentage: "-(0.34)",
// 	date: "August 2020",
// };
// const minWage = {
// 	number: `${nfObject.format(9.51)}%`,
// 	text: "Minimum Wage",
// 	percentage: "+(0.34)",
// 	date: "August 2020",
// };
// const hoursOfWork = {
// 	number: nfObject.format(1589423),
// 	text: "Hours of Work",
// 	percentage: "-(0.34)",
// 	date: "August 2020",
// };
// const underU = {
// 	number: `${nfObject.format(57.0)}%`,
// 	text: "Labour Under-utilization",
// 	percentage: "+(0.34)",
// 	date: "August 2020",
// };
