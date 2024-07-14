import "../css/Home.css";
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Profile from "./Profile";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
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
