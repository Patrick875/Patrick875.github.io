//jshint esversion:9
import React, { Component, useState } from "react";
import Graph from "../general/Graph";
import KeyLabour from "../general/KeyLabour";
import { useSelector } from "react-redux";
import GraphSection from "../general/GraphSection";

export default function Lbindicators(props) {
	const { data, headers } = useSelector((state) => state.LabourMarketGraphData);
	let nfObject = new Intl.NumberFormat("en-US");
	const [graphOn, setGraphOn] = useState(false);
	let [graphData, setGraphData] = useState([]);
	let [graphTitle, setGraphTitle] = useState([]);
	const showGraph = (value, datasets, title) => {
		setGraphOn(value);
		setGraphData([...graphData, datasets]);
		setGraphTitle([...graphTitle, title]);
	};
	return (
		<div
			className="summary"
			style={
				graphOn
					? {
							display: "grid",
							gridTemplateColumns: "60% 40%",
					  }
					: {
							display: "grid",
							justifyContent: "center",
					  }
			}>
			<div className="summary-left">
				{Object.values(data).map((el, elI) => (
					<KeyLabour title={headers[elI]} data={el} graph={showGraph} />
				))}
			</div>
			{graphOn ? (
				<div className="graph-section">
					<button
						className="fas fa-times close-icon"
						onClick={() => {
							setGraphOn(false);
							setGraphData([]);
							setGraphTitle([]);
						}}></button>
					<div className="graphs">
						{graphData.map((el, k) => (
							<Graph datasets={el} title={graphTitle[k]} />
						))}
					</div>
				</div>
			) : null}
		</div>
	);
}
