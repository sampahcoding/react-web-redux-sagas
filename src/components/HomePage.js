import React from "react";

const HomePage = () => (
	<div style={style.wrapper}>
		<h4>Prototype with React including:</h4>
		<ul>
			<li>Frontend React</li>
			<li>Real data from Fake online REST API</li>
			<li>Data management and fethcing using Redux and Redux saga</li>
			<li>Shipped with docker</li>
			<li>Support code splitting with dynamic import</li>
		</ul>
	</div>
);

export default HomePage;

const style = {
	wrapper: {
		margin: "3.5em"
	}
};
