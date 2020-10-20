//jshint esversion:9
import React, { useState } from "react";
import ebookIcon from "./../../images/icons/ebook.png";
import caseStudyIcon from "./../../images/icons/case-study.png";
import chartIcon from "./../../images/icons/graph-bar.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Overview from "./subpages/Overview";
import Casestudies from "./subpages/Casestudies";
import Publications from "./subpages/Publications";
import Ebooks from "./subpages/Ebooks";

export default function Resources() {
	const imgSizes = {
		width: 80,
		height: 80,
	};
	return (
		<div className="resources">
			<Router>
				<ul>
					<li>
						<Link to="/resources/">Overview</Link>
					</li>
					<li>
						<Link to="/resources/ebooks">Ebooks</Link>
					</li>
					<li>
						<Link to="/resources/case-studies">Case Studies</Link>
					</li>
					<li>
						<Link to="/resources/publications">Publications</Link>
					</li>
				</ul>
				<Switch>
					<Route
						exact
						path="/resources"
						component={() => (
							<Overview
								icons={{
									ebookIcon: ebookIcon,
									caseStudyIcon: caseStudyIcon,
									chartIcon: chartIcon,
								}}
								imgSizes={imgSizes}
							/>
						)}
					/>
					<Route
						path="/resources/ebooks"
						component={() => <Ebooks icon={ebookIcon} imgSizes={imgSizes} />}
					/>
					<Route
						path="/resources/case-studies"
						component={() => (
							<Casestudies icon={caseStudyIcon} imgSizes={imgSizes} />
						)}
					/>
					<Route
						path="/resources/publications"
						component={() => (
							<Publications icon={chartIcon} imgSizes={imgSizes} />
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}
