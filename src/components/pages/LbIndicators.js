//jshint esversion:9
import React, { useState } from "react";
import Graph from "../general/Graph";
import KeyLabour from "../general/KeyLabour";

export default function Lbindicators() {
	let nfObject = new Intl.NumberFormat("en-US");
	const laborForce = [
		{
			title: "Labour force participation rate",
			data: "78%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		},
		{
			title: "Labour productivity",
			data: "34%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		},
		{
			title: "Persons outside labor force",
			data: "7.8%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		},
		{
			title: "Labour Under-utilization",
			data: "45%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		},
	];
	const employment = [
		{
			title: " Employment to population ratio",
			data: 0.65,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		},
		{
			title: "Employment in High School Graduates",
			data: "34%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Employment in University Undergraduates",
			data: "76%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Employment  in University Graduates",
			data: "89%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Employment among people without High School Education",
			data: "56%",
			description: "employmentAmongPeopleWithoutHighSchoolEducation",
		},
	];
	const unemployment = [
		{
			title: "Youth Unemployment",
			data: "78%",
			description: "employmentAmongPeopleWithoutHighSchoolEducation",
		},
		{
			title: "Long Term Unemployment",
			data: "45.6%",
			description: "employmentAmongPeopleWithoutHighSchoolEducation",
		},
		{
			title: "Unemployment in High School Graduates",
			data: "34%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Unmployment in University Undergraduates",
			data: "76%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Unemployment  in University Graduates",
			data: "89%",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Unemployment among people without High School Education",
			data: "56%",
			description: "employmentAmongPeopleWithoutHighSchoolEducation",
		},
	];
	const salaryWages = [
		{
			title: "Average Wages",
			data: "3$/hr",
			description: "Wages and compensation costs",
		},
		{
			title: "Average Compensation Costs",
			data: "2.5$/day for a wager",
			description: "Wages and compensation costs",
		},
		{
			title: "Average Wages For High School Graduates",
			data: "40$/month",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Average Salary For University Undergraduates",
			data: "120$/month",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Average Salary For University Graduates",
			data: "450$/month",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		{
			title: "Unemployment among people without High School Education",
			data: "70$/month",
			description: "employmentAmongPeopleWithoutHighSchoolEducation",
		},
	];
	const [graphOn, setGraphOn] = useState(false);
	return (
		<div className="summary">
			<div className="summary-left">
				<KeyLabour title="LABOR FORCE" data={laborForce} />
				<KeyLabour title="EMPLOYMENT" graph={graphOn} data={employment} />
				<KeyLabour title="UNEMPLOYMENT" graph={graphOn} data={unemployment} />
				<KeyLabour
					title="SALARY AND WAGES"
					graph={graphOn}
					data={salaryWages}
				/>
			</div>
			{graphOn ? (
				<div>
					<Graph />
				</div>
			) : null}
		</div>
	);
}
