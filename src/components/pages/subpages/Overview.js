//jshint esversion:9
import React from "react";
import axios from "axios";
import download from "downloadjs";
import ResourcesDataCard from "../../general/Resources_data_card";

function Overview(props) {
	const imgSizes = {
		width: 80,
		height: 80,
	};
	const data = {
		ebooks: {
			imgData: {
				src: `${props.icons.ebookIcon}`,
				width: imgSizes.width,
				height: imgSizes.height,
				alt: "Pdf icon",
			},
			title: [
				"unemployment in Rwanda",
				"Labour force Distribution by Sector",
				"Labour underUtilization",
			],
			dates: ["July 2020", "August 2020", "September 2020"],
		},
		caseStudies: {
			imgData: {
				src: `${props.icons.caseStudyIcon}`,
				width: imgSizes.width,
				height: imgSizes.height,
				alt: "Searching Icon",
			},
			title: {
				titleHead: "Case Studies",
				titleCard: [
					"Factors for Youth unemployment",
					"Women unemployment in Rwanda",
					"Rural Vs Urban salaries and wages gap",
				],
			},
			dates: ["January 2020", "December 2019", "July 2020"],
		},
		reportsAndPublications: {
			imgData: {
				src: `${props.icons.chartIcon}`,
				width: imgSizes.width,
				height: imgSizes.height,
				alt: "Searching Icon",
			},
			title: {
				titleHead: "Reports and Publications",
				titleCard: [
					"Unemployment Status",
					"NISR labor statistics quota 2 2020",
					"ILO Rwanda labor status quota 2 2020",
				],
			},
			dates: ["January 2020", "July 2019", "July 2020"],
		},
	};
	const handleDownload = () => {
		axios
			.get("./docs/Youth_and_total_unemployment_rate_The_impact_of_po.pdf", {
				responseType: "blob",
			})
			.then((response) => {
				download(response.data, "file.pdf", "application/pdf");
			})
			.catch((error) => console.log(`DOWNLOAD ERROR \n ${error}`));
	};

	return (
		<div>
			<h3>OUR RESOURCES</h3>
			<h4>Take a look at our law data. Find out where we get our basis.</h4>
			<h3>How do you like to view your data?</h3>
			<div className="docs">
				<div>
					<img
						src={props.icons.ebookIcon}
						alt="pdf icon"
						width="80"
						height="80"
					/>
					<h4>E-BOOKS</h4>
				</div>
				<div>
					<img
						src={props.icons.caseStudyIcon}
						alt="caseStudyIcons-icon"
						width="80"
						height="80"
					/>
					<h4>CASE STUDIES</h4>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcons-icon"
						width="80"
						height="80"
					/>
					<h4>REPORTS AND ANNOUNCEMENTS</h4>
				</div>
			</div>
			<div>
				<h3>OUR LATEST PUBLICATIONS</h3>
				<h4 className="title-h4"> Featured Ebooks</h4>
			</div>
			<div className="e-books">
				{data.ebooks.title.map((el, elI) => (
					<ResourcesDataCard
						imgData={{
							src: `${data.ebooks.imgData.src}`,
							alt: data.ebooks.imgData.alt,
							width: data.ebooks.imgData.width,
							height: data.ebooks.imgData.height,
						}}
						data={{ title: el, date: data.ebooks.dates[elI] }}
					/>
				))}
			</div>
			<div>
				<h4 className="title-h4"> Featured Case Studies</h4>
			</div>
			<div className="case-studies">
				<div>
					<img
						src={props.icons.caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.caseStudyIcon}
						alt="caseStudyIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Unemployment in Graduates</h4>
					<p>May 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
			</div>
			<h4 className="title-h4">Featured Reports and Publications</h4>
			<div className="reports">
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
			</div>

			<div className="publications">
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
				<div>
					<img
						src={props.icons.chartIcon}
						alt="chartIcon-icon"
						width="80"
						height="80"
					/>
					<h4>Minimum Wage per Sector</h4>
					<p>June 2020</p>
					<button onClick={handleDownload} className="download-btn">
						Download
					</button>
					<button onClick={handleDownload} className="view-btn">
						View
					</button>
				</div>
			</div>
		</div>
	);
}

export default Overview;
