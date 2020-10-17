//jshint esversion:9
import React from "react";
import axios from "axios";
import download from "downloadjs";

function Casestudies({ icon }) {
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
		<div className="case-studies">
			<div>
				<img
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
					src={icon.caseStudyIcon}
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
	);
}

export default Casestudies;
