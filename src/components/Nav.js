import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
	<header>
		<img src={require("assets/images/logo.png")} className="icon" alt="icon"/>
		<div className="menus">
			<ul className="list-menu">
				<li><Link to="/">Homepage</Link></li>
				<li><Link to="/search">Searchpage</Link></li>
			</ul>
		</div>
	</header>
);

export default Nav;
