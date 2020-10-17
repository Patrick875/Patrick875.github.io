//jshint esversion:9
import React, { useState } from "react";
import ebookIcon from "./../../images/icons/ebook.png";
import caseStudyIcon from "./../../images/icons/case-study.png";
import chartIcon from "./../../images/icons/graph-bar.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import axios from "axios";
import download from "downloadjs";
import Pdfviewer from "./../general/Pdfviewer";
import PdfViewer from "./../general/Pdfviewer";
import Overview from "./subpages/Overview";
import Casestudies from "./subpages/Casestudies";
import Publications from "./subpages/Publications";
import Ebooks from "./subpages/Ebooks";

export default function Resources() {
	const handleDownload = () => {
		console.log("WEEEEE  SHAAAAAAAA WEEEE PETIT");
		axios
			.get("./docs/Youth_and_total_unemployment_rate_The_impact_of_po.pdf", {
				// headers:{
				// 	'Content-Type':'application/pdf'
				// },
				responseType: "blob",
			})
			.then((response) => {
				download(response.data, "file.pdf", "application/pdf");
			})
			.catch((error) => console.log(`DOWNLOAD ERROR \n ${error}`));
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
							/>
						)}
					/>
					<Route
						path="/resources/ebooks"
						component={() => (
							<Ebooks
								icon={{ ebookIcon: ebookIcon }}
								handleClick={handleDownload}
							/>
						)}
					/>
					<Route
						path="/resources/case-studies"
						component={() => (
							<Casestudies
								icon={{ caseStudyIcon: caseStudyIcon }}
								handleClick={handleDownload}
							/>
						)}
					/>
					<Route
						path="/resources/publications"
						component={() => (
							<Publications
								icon={{ chartIcon: chartIcon }}
								handleClick={handleDownload}
							/>
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}
