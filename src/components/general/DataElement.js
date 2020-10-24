//jshint esversion:9
import React, { useState, useEffect, useRef } from "react";

export default function DataElement({ title, children }) {
	const [active, setActive] = useState(false);
	// const [height, setHeight] = useState("0px");

	const contentRef = useRef(null);
	useEffect(() => {
		contentRef.current.style.maxHeight = active
			? `${contentRef.current.scrollHeight + 20}px`
			: "0px";
	}, [contentRef, active]);

	const toggleAccordion = () => {
		setActive(!active);
	};
	console.log(children);
	return (
		<div className="accordion_section">
			<div className={`accordion `} onClick={toggleAccordion}>
				<div className="accordion_title_left">
					<p className="accordion_title_text">{title.title}</p>
					<p className="accordion_title_number">{title.number}</p>
				</div>
				<div>
					<i
						className={`fas fa-angle-right ${
							active ? "accordion_icon rotate" : "accordion_icon"
						}`}></i>
				</div>
			</div>
			<div className="accordion_content" ref={contentRef}>
				{children}
			</div>
		</div>
	);
}
