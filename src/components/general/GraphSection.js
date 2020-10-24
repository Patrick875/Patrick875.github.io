//jshint esversion:9

import React from "react";

export default function GraphSection(props) {
	const element = props.children ? (
		<div className="graphs">{props.children}</div>
	) : null;
	if (!props.children) {
		props.graphsDisplay(false);
	}
	return { element };
}
