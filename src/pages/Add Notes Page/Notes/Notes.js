import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Note from "./Note";
import Sidebar from "../../Sidebar/SideBar";
export default function Notes() {
  const [deletenote,handleDeleteNote]=useState();
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    if (notes.length == 0) {
      setTitle("No notes to display");
      console.log("No notes to display");
    } else {
      setTitle("");
      setNotes(notes);
      console.log(notes);
    }
  }, []);

  const handClick = () => {
    navigate("/AddNotes");
  };

  const getAllNotes = () => {
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    console.log("here ", notes);

    setNotes(notes);
  };
  useEffect(() => {
    getAllNotes();
  }, []);



  

  return (
    <div>
      <Sidebar />
      <div className={styles.note_container}>
        <h1 className={styles.head}>Note and Reminders</h1>

        <div className={styles.notes_list}>
          {notes.map((u, key) => {
            return <Note value={u}  handleDeleteNote={handleDeleteNote}/>;
          })}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.center}>
          <Link to="/AddNotes">
            <button type="button" className={styles.btn}>
              Add Note
            </button>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}
