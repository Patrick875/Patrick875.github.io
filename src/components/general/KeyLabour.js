//jshint esversion:9

import React, { Fragment, useState } from "react";
import DataElement from "./DataElement";
import { Link } from "react-router-dom";

export default function KeyLabour(props) {
	const [showGraph, setShowGraph] = useState(false);
	const table = props.data.map((key) => (
		<React.Fragment>
			<DataElement
				title={{ title: key.title, number: key.data }}
				graphData={key.numbers}>
				<p>{key.description}</p>
				<ul>
					<li>
						<Link
							to="#"
							onClick={() => {
								props.graph(!showGraph, key.numbers, key.title);
							}}>
							read more
						</Link>
					</li>
					<li>
						<Link to="#">source</Link>
					</li>
				</ul>
			</DataElement>
		</React.Fragment>
	));

	return (
		<div className="key-labour">
			<h3>{props.title}</h3>
			{table}
		</div>
	);
}