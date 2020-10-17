//jshint esversion:9
import React from "react";
import Card from "@material-ui/core/Card";
export default function InfoTile(props) {
	const statusIcon = props.data.percentage.includes("+")
		? props.statusIcon.upIcon
		: props.statusIcon.downIcon;
	const backg = statusIcon.includes("arrow-74") ? "#0F996D" : "#B5056C";
	console.log(statusIcon);
	return (
		<Card className="info-tile" variant="outlined" width="80%" elevation="8dp">
			<img
				src={props.data.icon}
				alt="many-people-icon"
				width="108"
				height="96"
			/>
			<h4>{props.data.title}</h4>
			<p>{props.data.number}</p>
			<div className="percent">
				{props.data.percentage}
				<img
					src={statusIcon}
					alt="status-icon"
					width="10"
					height="10"
					style={{
						background: { backg },
					}}
				/>
			</div>
			<p>{props.data.date}</p>
		</Card>
	);
}
