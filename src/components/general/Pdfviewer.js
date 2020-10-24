//jshint esversion:9
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import file from "./../../docs/LMIS Training Agenda.pdf";

export default function PdfViewer() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
}
