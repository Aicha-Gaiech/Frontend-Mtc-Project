import style from "./styles.module.css";
import { useState } from "react";

const AddCourse = ({ handleAddCourse }) => {
  const [courseName, setCourseName] = useState("");
  const characterLimit = 20;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setCourseName(event.target.value);
    }
  };
  //pour assurer que le nom du text diff du vide
  const handleSaveClick = () => {
    if (courseName.trim().length > 0) {
      handleAddCourse(courseName);
      setCourseName("");
    }
  };

  return (
    <div className={style.course_new}>
      <textarea
        rows="8"
        cols="10"
        placeholder="add course name..."
        value={courseName}
        onChange={handleChange}
      ></textarea>
      <div className={style.course}>
        <button className={style.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
