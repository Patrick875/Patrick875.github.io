//jshint esversion:9
import React from "react";
import ebookIcon from "./../../images/icons/ebook.png";
import caseStudyIcon from "./../../images/icons/case-study.png";
import chartIcon from "./../../images/icons/graph-bar.png";

export default function Resources() {
	return (
		<div className="resources">
			<h3>OUR RESOURCES</h3>
			<h4>Take a look at our law data. Find out where we get our basis.</h4>
			<h3>How do you like to view your data?</h3>
			<div className="docs">
				<div>
					<img src={ebookIcon} alt="pdf icon" width="80" height="80" />
					<h4>E-BOOKS</h4>
				</div>
				<div>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcons-icon"
						width="80"
						height="80"
					/>
					<h4>CASE STUDIES</h4>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcons-icon" width="80" height="80" />
					<h4>CHARTS</h4>
				</div>
			</div>
			<h3>OUR LATEST PUBLICATIONS</h3>
			<h4 className="title-h4">E-BOOKS</h4>
			<div className="e-books">
				<div>
					<img src={ebookIcon} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
				<div>
					<img src={ebookIcon} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
				<div>
					<img src={ebookIcon} alt="pdf-icon" width="80" height="80" />
					<h4>Unemployment in Rwanda</h4>
					<p>July 2020</p>
				</div>
			</div>
			<h4 className="title-h4">CASE STUDIES</h4>
			<div className="case-studies">
				<div>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
				<div>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
				<div>
					<img
						src={caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
				</div>
			</div>
			<h4 className="title-h4">REPORTS AND PUBLICATIONS</h4>
			<div className="reports">
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
			</div>
			<h4 className="title-h4">PUBLICATIONS</h4>
			<div className="publications">
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
				<div>
					<img src={chartIcon} alt="chartIcon-icon" width="80" height="80" />
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
				</div>
			</div>
		</div>
	);
}
