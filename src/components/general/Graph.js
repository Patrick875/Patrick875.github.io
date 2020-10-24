//jshint esversion:9
import React, { useState } from "react";
import { Bar, Line, Chart, Doughnut } from "react-chartjs-2";

export default function Graph(props) {
	let options, data;
	const [display, setDisplay] = useState("block");
	options = {
		title: {
			display: true,
			fontSize: 20,
			text: props.title,
		},
	};
	data = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Male",
				// backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: Object.values(props.datasets)[0],
			},
			{
				label: "Female",
				// backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: Object.values(props.datasets)[1],
			},
			{
				label: "total",
				// backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [
					5123895,
					5123895,
					5123895,
					5123895,
					5123895,
					5123895,
					5123895,
					5123895,
					5123895,
					5123895,
					5123895,
				],
			},
		],
	};
	return (
		<div style={{ display: display }}>
			<i
				className="fas fa-times "
				onClick={() => {
					setDisplay("none");
				}}></i>
			<Line data={data} options={options} />
		</div>
	);
}

// let nfObject = new Intl.NumberFormat("en-US");
