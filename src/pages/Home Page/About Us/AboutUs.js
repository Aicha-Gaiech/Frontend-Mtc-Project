import React from 'react';
import Footer from './Footer';
import styles from './Styles.module.css';
const AboutUs = () => {
  return (
    <div>
      <div class={styles.about_container}>
        <div class={styles.image_container}>
          <img
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/571d82c5059e5cd299902068/vbvf-min.jpg"
            alt=""
          />
        </div>

        <div class={styles.text_container}>
          <h1 className={styles.h1}>Qui sommes nous</h1>
          <p className={styles.p}>
            {' '}
            <h4 className={styles.h4}>
              {' '}
              est un site éducatif multidisciplinaire, l'endroit où vous pouvez
              découvrir et apprendre à propos de toutes ce qui vous intéressent.
            </h4>
            <br /> Nous sommes une équipe dévouée d'enseignants, d'experts et de
            passionnés qui partagent la même mission : rendre l'apprentissage
            accessible à tous. Notre site propose une large gamme de cours en
            ligne couvrant de nombreux domaines, allant de la technologie à la
            santé en passant par les sciences sociales, les arts et les
            sciences.
            <br /> Nous croyons que l'apprentissage n'a pas de limites et que
            chacun devrait avoir la possibilité d'explorer ses centres d'intérêt
            et de développer ses compétences dans de nombreux domaines
            différents. Nous sommes fiers de fournir des ressources éducatives
            de qualité supérieure qui sont à la fois accessibles et amusantes.
            <br /> Que vous soyez à la recherche d'une formation pour votre
            carrière, d'un hobby passionnant ou simplement d'un moyen d'acquérir
            de nouvelles connaissances, nous avons ce qu'il vous faut.
          </p>
        </div>
      </div>
    </div>
  );
};



export default AboutUs;
/*
import "./App.css";
import AddFiles from "./pages/AddFiles Page/AddFiles";
import ListFiles from "./pages/AddFiles Page/ListFiles";

import AddNotes from "./pages/Add Notes Page/AddNotes.js/AddNotes";
import Notes from "./pages/Add Notes Page/Notes/Notes";

import SignUp from "./pages/SignUp Page/SignUp";
import SignIn from "./pages/SignIn Page/SignIn";

import Profile from "./pages/Settings Pages/Pages/Profile";
import Password from "./pages/Settings Pages/Pages/PasswordPage";
import Interests from "./pages/Settings Pages/Pages/InterestsPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home Page/Home/Home";
import Dashbord from "./pages/Courses Page/Home/Home";
import AllCourses from "./pages/Courses Page/AllCourses/AllCourses";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Right Sidebar/Sidebar";
import HomeChat from "./pages/ChatPage/Homechat";
import CoursesList from "./pages/Courses Page/CoursesList/CoursesList";
import AboutUs from "./pages/Home Page/About Us/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddFiles" element={<AddFiles />} />
          <Route path="/ListFiles" element={<ListFiles />} />

          <Route path="/AddNotes" element={<AddNotes />} />
          <Route path="/Notes" element={<Notes />} />

          <Route path="/Chat" element={<HomeChat />} />

          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Navbar" element={<Navbar />} />

          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="/CoursesList" element={<CoursesList />} />

          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Signin" element={<SignIn />} />

          <Route path="/Settings/Profile" element={<Profile />} />
          <Route path="/Settings/Password" element={<Password />} />
          <Route path="/Settings/Interests" element={<Interests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; */
