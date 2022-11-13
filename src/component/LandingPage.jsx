import React from "react";
import styles from "./LandingPage.module.css";
import Logo from "../assets/Logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const LandingPage = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>ShoBis Education</h1>
			<h2 className={styles.subheading}>
				{" "}
				ShoBis Education is a free education platform for parents to get the
				best resources available at NIOS
			</h2>
			<Link to="courses">
				<Button variant="contained">View Courses</Button>
			</Link>
		</div>
	);
};

export default LandingPage;
