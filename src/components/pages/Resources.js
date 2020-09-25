//jshint esversion:9
import React from "react";
import file from "./../../images/icons/iconmonstr-file-34-240.png";
import note from "./../../images/icons/iconmonstr-note-20-240.png";
import chart from "./../../images/icons/iconmonstr-chart-6-240.png";

export default function Resources() {
	return (
		<div className="resources">
			<h3>OUR RESOURCES</h3>
			<h4>Take a look at our law data. Find out where we get our basis.</h4>
			<h3>How do you like to view your data?</h3>
			<div className="docs">
				<div>
					<img src={file} alt="pdf icon" width="80" height="80" />
					<h4>E-BOOKS</h4>
				</div>
				<div>
					<img src={note} alt="notes-icon" width="80" height="80" />
					<h4>CASE STUDIES</h4>
				</div>
				<div>
					<img src={chart} alt="charts-icon" width="80" height="80" />
					<h4>E-BOOKS</h4>
				</div>
			</div>
			<h3>OUR LATEST PUBLICATIONS</h3>
			<h4>E-BOOKS</h4>
			<div className="e-books">
				<div>
					<img src={file} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
				<div>
					<img src={file} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
				<div>
					<img src={file} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
			</div>
			<h4>CASE STUDIES</h4>
			<div className="case-studies">
				<div>
					<img src={note} alt="note-icon" width="80" height="80" />
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
				<div>
					<img src={note} alt="note-icon" width="80" height="80" />
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
				<div>
					<img src={note} alt="note-icon" width="80" height="80" />
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
			</div>
			<h4>GRAPHS</h4>
			<div className="graphs">
				<div>
					<img src={chart} alt="chart-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chart} alt="chart-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chart} alt="chart-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
			</div>
		</div>
	);
}
