//jshint esversion:9
import React, { useState } from "react";

export default function DataElement({ title, children }) {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="accordion-wrapper">
			<div
				className={` accordion-title ${isOpen ? "open" : ""}`}
				onClick={() => setOpen(!isOpen)}>
				<span className="accordion-element-text">{title.title}</span>
				<span>{title.number}</span>
			</div>
			<div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
				<div className="accordion-content">{children}</div>
			</div>
		</div>
	);
}
