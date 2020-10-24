//jshint esversion:9

import React from "react";
import { Link } from "react-router-dom";

function HomeLaborIndicDef(props) {
	return (
		<div className="top">
			<Link to={`${props.data.link}`}>
				<h2>{props.data.title}</h2>
			</Link>
			<p>{props.data.description}</p>
		</div>
	);
}

export default HomeLaborIndicDef;
