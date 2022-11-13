import React from "react";
import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";
const Courses = () => {
	const coursesAvailable = [
		{title: "Secondary Courses",
    isAvailable: true,
  },
		{title: "Sr. Secondary Courses",
    isAvailable: true,
  },
		{title: "भारतीय ज्ञान परंपरा",
    isAvailable: false,
  },
		{title: "Vocational Courses",
    isAvailable: false,
  },
		{title: "Open Basic Education",
    isAvailable: false,
  },
		{title: "Diploma in Elementary Education (D.El.Ed.)",
    isAvailable: false,
  },
		{title: "Jan Swasthya (जन स्वास्थ्य)",
    isAvailable: false,
  },
		{title: "Interact with Faculty",
    isAvailable: false,
  },
		{title: "Course Material for Persons with Disabilities",
    isAvailable: false,
  },
	];

	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>What Would You Like to Learn Today?</h1>
			<div className={styles.coursesContainer}>
				{coursesAvailable.map((course, index) => (
					<CourseCard key={index} title={course.title} course={course} isAvailable={course.isAvailable} />
				))}
			</div>
		</div>
	);
};

export default Courses;
