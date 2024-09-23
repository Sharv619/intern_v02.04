// Header.js
import React from 'react';

function Header() {
	return (
		<header>
			<h1>My Website</h1>
			<nav>
				<meta charSet="UTF-8" />
				<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
				<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
				<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
			</nav>
		</header>
	);
}
export default Header;


//Convert above code into functional components

function Header() {
	return (
	<div> <header>HoodWatchers </header>
	//Horizontal Line 
	<hr 
	style={{
		color: color,
		backgroundColor: color,
		heightght: 5,
	}}
	 />
	 </div>

	);
}
