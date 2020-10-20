//jshint esversion:9
import React from "react";
import { Link } from "react-router-dom";

function HomeLabourIndicDescr(props) {
	return (
		<div className={`${props.class}`}>
			<Link to={`/${props.data.link}`}>
				<h2>{props.data.title}</h2>
			</Link>
			<img
				src={`${props.imgData.src}`}
				alt={`${props.imgData.alt}`}
				width={props.imgData.width}
				height={props.imgData.height}
			/>
			<p>{props.data.description}</p>
		</div>
	);
}

export default HomeLabourIndicDescr;
