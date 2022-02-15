import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [setColor, getColor] = useState("red");
	console.log(setColor);
	return (
		<div className="traffic">
			<div
				onClick={() => getColor("red")}
				className={
					"light red" + (setColor === "red" ? " glow" : "")
				}></div>
			<div
				onClick={() => getColor("yellow")}
				className={
					"light yellow" + (setColor === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => getColor("green")}
				className={
					"light green" + (setColor === "green" ? " glow" : "")
				}></div>
		</div>
	);
};

export default Home;
