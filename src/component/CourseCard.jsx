import { Button, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";
const CourseCard = (props) => {
	const { title, course, isAvailable } = props;
	return isAvailable ? (
		<Link to={`/course/${title}`} className={styles.courseCardMain}>
			<span>{title}</span>
		</Link>
	) : (
		<Tooltip title="coming soon..." arrow>
			<span>
        <Button disabled className={styles.courseCardMain}>
          <span>{title}</span>
        </Button>
      </span>
		</Tooltip>
	);
};

export default CourseCard;
