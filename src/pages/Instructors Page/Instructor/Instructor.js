
import style from "./styles.module.css";
const Prof = ({ id, name, age, education, experience, contact }) => {
  return (
    <div className={style.container}>
            <div className={style.prof}>
      <center>
        <img src="prof.jpeg" alt="image" width="100px" className={style.img1}></img>
      </center>
      
      <p className={style.p}>
        <b>Name :</b>{name}
        <br></br>
        <b>Age : </b>
        {age}
        <br></br>
        <b>Education : </b> {education} <br></br>
        <b>Experience : </b>
        {experience} <br></br>
        <b>Contact : </b>
        {contact} <br></br>
      </p>
    </div>
    </div>
    
  );
};

export default Prof;
