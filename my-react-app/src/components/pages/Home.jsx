import "../css/Home.css";
import Header from "../jsx/Header";
import Intro from "../jsx/Intro";
import Skills from "../jsx/Skills";
import Projects from "../jsx/Projects";
import Profile from "../jsx/Profile";
import Footer from "../jsx/Footer";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  toast("Sayfama hoşgeldin!");
  return (
    <>
      <ToastContainer />
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="intro">
          <Intro />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="profile">
          <Profile />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
