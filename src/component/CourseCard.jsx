import { Button, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";
const CourseCard = (props) => {
	const { title, course, isAvailable, subject } = props;
	return isAvailable ? (
		subject ? (
			<a
				href={course.link}
				target="_blank"
				className={styles.courseCardMain}
				rel="noreferrer"
			>
				{" "}
				<span className={styles.courseTitle}>{title}</span>
			</a>
		) : (
			<Link to={`${title}`} className={styles.courseCardMain}>
				<span className={styles.courseTitle}>{title}</span>
			</Link>
		)
	) : (
		<Tooltip title="coming soon..." arrow>
			<span>
				<Button disabled className={styles.courseCardMain}>
					<span className={styles.courseTitle}>{title}</span>
				</Button>
			</span>
		</Tooltip>
	);
};

export default CourseCard;
