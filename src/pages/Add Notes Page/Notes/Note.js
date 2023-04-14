
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { MdDeleteForever } from "react-icons/md";

export default function Note(props) {
  
  const [isVisible, setIsVisible] = useState(true);
  
  function handleDeleteNote() {
   setIsVisible(false);
  }

  const [a, setA] = useState();
  useEffect(() => {
    setA(1);
    
  }, []);
  const parite = () => {
    console.log(props.value.id);

    if (props.value.id % 3 == 2) {
      return ["#11B99E"]; //green
    } else if (props.value.id % 3 == 1) {
      return ["#FFC406"]; //yellow
    } else {
      return ["#B4F6C1"]; //pistache
    }
  };

    return (
      
       <>
        {isVisible && (
        <div>
          <div className={styles.note} style={{ background: parite()[0] }}>
          {props.value.noteText}
          <table>
        <tr>
          <td></td>
          <td>
          <div className={styles.note_delete}>
            {
              isVisible && (
               
                <MdDeleteForever
                  onClick={() => handleDeleteNote()}
                  className={styles.delete_icon}
                  size="1em"
                /> )}

              
              </div>
          </td>
          </tr>
          </table>
              </div>
              </div>
       
      )}
       </> 
        
        
   
    );
  };


  