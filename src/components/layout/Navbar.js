import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./LoggedInLinks";
import SignedOutLinks from "./LoggedOutLinks";

const Navbar = () => {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">TUDU</Link>
                <SignedInLinks />
                <SignedOutLinks />
			</div>
		</nav>
	);
};

export default Navbar;
