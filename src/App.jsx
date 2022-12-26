import React, { useState } from "react";
import "./App.css";

export default function App() {
	const [darkTheme, setDarkTheme] = useState(false);

	const themeStyle = {
		backgroundColor: darkTheme ? "#333" : "#ccc",
		color: darkTheme ? "#ccc" : "#333",
		padding: "2rem",
		margin: "2rem",
	};

	return (
		<div className="header">
			<button onClick={() => setDarkTheme(!darkTheme)}>change</button>
			<div style={themeStyle}>test</div>
		</div>
	);
}
