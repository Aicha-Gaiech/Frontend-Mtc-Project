import Course from "../Course/Course";
import AddCourse from "../AddCourse/AddCourse";

import style from "./styles.module.css";
const CoursesList = ({ courses, handleAddCourse, handleDeleteCourse }) => {
  return (
    <div className={style.courses_list}>
      {courses.map((course) => (
        <Course
          id={course.id}
          name={course.name}
          img={course.img}
          handleDeleteCourse={handleDeleteCourse}
        />
      ))}
      <AddCourse handleAddCourse={handleAddCourse} />
    </div>
  );
};

export default CoursesList;
