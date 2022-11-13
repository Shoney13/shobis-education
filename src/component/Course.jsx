import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Course.module.css";
import CourseCard from "./CourseCard";

const Course = () => {
	let { course } = useParams();
	const [courseData, setCourseData] = useState([]);

	// TODO: API Call

	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>{course}</h1>
			<div className={styles.coursesContainer}>
				{courseData.length ? (
					courseData.map((course, index) => (
						<CourseCard key={index} title={course} />
					))
				) : (
					<>Loading...</>
				)}
			</div>
		</div>
	);
};

export default Course;
