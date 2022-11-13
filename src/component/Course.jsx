import React, { useState } from "react";
import { useParams } from "react-router-dom";
import course from "./jsonData";
import styles from "./Course.module.css";
import CourseCard from "./CourseCard";

const Course = () => {
	let { course: courseTitle, subject, } = useParams();

  let courseData=[];
  if (courseTitle) {
    courseData = course?.[courseTitle] ?? []
  }
  if (subject) {
    courseData = courseData.filter(elem=>elem.title===subject).pop().course
  }

	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>{subject ?? courseTitle}</h1>
			<div className={styles.coursesContainer}>
				{courseData.map((course, index) => (
					<CourseCard
						key={index}
						title={course.title}
						course={course}
						isAvailable={subject ?? course.isAvailable}
            subject={subject}
					/>
				))}
			</div>
		</div>
	);
};

export default Course;
