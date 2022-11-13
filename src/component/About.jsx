import { height } from "@mui/system";
import React from "react";

const About = () => {
	return (
		<div
			style={{
				textAlign: "center",
				height: "60vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				gap: "5rem",
			}}
		>
			<h1> ShoBis </h1>
			<p style={{ fontSize: "1.5rem" }}>
				NIOS (the board of education under the Union Government of India) has
				all the resources parents need to homeschool their children. <br />
				But their UI is not at all intuitive. <br />
				There is no easy-to-follow guide. It is not supplemented with other free
				resources from around the Internet
				<br />
				Our Mission is to make a better and easy to use Website through which
				you can access all the resources provided by NIOS
			</p>
		</div>
	);
};

export default About;
