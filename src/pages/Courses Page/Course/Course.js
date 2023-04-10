import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "./styles.module.css";


const Course = ({ id, name,imageURL, handleDeleteCourse }) => {
   
  return (

    <div className={style.course}>
      <table>
        <tr>
          <td>
            <span>
              <b className={style.name}>{name}</b>
            </span>
          </td>
          <td>
            <div className={style.course_delete}>
              <MdDeleteForever
                onClick={() => handleDeleteCourse(id)}
                className={style.delete_icon}
                size="1em"
              />
            </div>
          </td>
        </tr>
      </table>

      <div>
        <Link to={"CoursProfs"}>
          <center>
            <img src={imageURL} alt="image" className={style.coursImg}></img>
          </center>
        </Link>
      </div>
    </div>
  );
};

export default Course;
