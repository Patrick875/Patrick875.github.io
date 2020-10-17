//jshint esversion:9
import React from "react";
import axios from "axios";
import download from "downloadjs";

function Ebooks({ icon }) {
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
		<div className="e-books">
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
				<button onClick={handleDownload} className="download-btn">
					Download
				</button>
				<button onClick={handleDownload} className="view-btn">
					View
				</button>
			</div>
			<div>
				<img src={icon.ebookIcon} alt="pdf-icon" width="80" height="80" />
				<h4>Unemployment in Rwanda</h4>
				<p>July 2020</p>
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

export default Ebooks;
