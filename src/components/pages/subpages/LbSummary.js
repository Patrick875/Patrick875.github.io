//jshint esversion:9
import React from "react";
import { Link } from "react-router-dom";

export default function LbSummary() {
	return (
		<div className="summary">
			<p>What are labour market indicators ?</p>
			<p>
				The KILM is a collection of 17 key indicators of the labour market,
				covering employment and other variables relating to employment (status,
				economic activity, occupation, hours of work etc.), employment in the
				informal economy,unemployment and the characteristics of the unemployed,
				underemployment, education, wages and compensation costs, labour
				productivity and working poverty. Taken together, the KILM indicators
				provide a strong basis for assessing and addressing key questions
				related to productive employment and decent work.
			</p>
			<p>Here the indicators are grouped in 4 major indicators </p>

			<p>1. Labour Force </p>
			<p>
				The labour force participation rate is a measure of the proportion of a
				country’s working-age population that engages actively in the labour
				market, either by working or looking for work; it provides an indication
				of the size of the supply of labour available to engage in the
				production of goods and services, relative to the population at working
				age.
			</p>
			<p>2. Employment Data</p>
			<p>
				The employment-to-population ratio is defined as the proportion of a
				country’s working-age population that is employed. A high ratio means
				that a large proportion of a country’s population is employed, while a
				low ratio means that a large share of the population is not involved
				directly in market-related activities, because they are either
				unemployed or (more likely) out of the labour force altogether.
			</p>
			<p>3. Unemployment Data</p>
			<p>
				The indicator of status in employment distinguishes between two
				categories of the total employed. These are: (a) wage and salaried
				workers (also known as employees); and (b) self-employed workers. These
				two groups of workers are presented as percentages of the total employed
				for both sexes and for males and females separately.
			</p>
			<p>4. Salary&Wages</p>
			<p>
				The KILM 8 indicator is a measure of employment in the informal economy
				as a percentage of total non-agricultural employment. There are wide
				variations in definitions and methodology of data collection related to
				the informal economy. Some countries now provide data according to the
				2003 guidelines concerning a statistical definition of informal
				employment. The KILM 9th edition contains national estimates on informal
				employment.
			</p>
			<p>Navigate to get in deep data</p>
			<ul className="summary-nav">
				<li>
					<Link to="/labour-market-indicators/labor-force">Labor Force</Link>
				</li>
				<li>
					<Link to="/labour-market-indicators/employment-data">
						Employment Data
					</Link>
				</li>
				<li>
					<Link to="/labour-market-indicators/unemployment-data">
						Unemployment Data
					</Link>
				</li>
				<li>
					<Link to="/labour-market-indicators/salary-wages">Salary&Wages</Link>
				</li>
			</ul>
			<p>How data is represented ?</p>
			<p>
				You can get data from graphs as well as reports and publications.You can
				get data from graphs as well as reports and publications. You can get
				data from graphs as well as reports and publications. You can get data
				from graphs as well as reports and publications. You can get data from
				graphs as well as reports and publications. You can get data from graphs
				as well as reports and publications. You can get data from graphs as
				well as reports and publications. You can get data from graphs as well
				as reports and publications.
			</p>
			<Link to="/resources">Get to the resources section right away</Link>
			<p>How to get the most out data ?</p>
			<ol className="ordered-list">
				<li>Understand the indicators</li>
				<li>Read what you need first</li>
				<li>
					<Link to="/signup" style={{ display: "inline" }}>
						Take notes
					</Link>
				</li>
				<li>
					Compare different
					<Link to="/signup" style={{ display: "inline", padding: "0 .3em" }}>
						Resources
					</Link>
				</li>
				<li>
					<Link
						to="/resources"
						style={{ display: "inline", padding: "0 .3em 0 0" }}>
						Download
					</Link>{" "}
					for future reference
				</li>
				<li>
					Upload data from your own
					<Link to="/signup" style={{ display: "inline", padding: "0 .3em" }}>
						findings
					</Link>
				</li>
			</ol>
		</div>
	);
}
