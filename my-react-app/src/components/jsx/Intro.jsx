import "../css/Intro.css";
import img1 from "../img/img1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export default function Intro() {
  const { t } = useTranslation();
  const history = useHistory();

  const handleContact = () => {
    history.push("/contact");
  };

  return (
    <>
      <div className="intro-container">
        <div className="intro-left-section">
          <div className="cizgi">
            <span>------------------------- Ezgi</span>
          </div>

          <h1 id="title-1">{t("Creative thinker")}</h1>
          <h1>{t("Minimalizm lover")}</h1>
          <p id="its-me">
            {t("Hi!I'm Ezgi.I'm a full-stack developer.")}
            {t("If you are looking for a developer ")}
            {t("who to craft solid and scalable frontend products  ")}
            {t("with great user experiences.")}
            {t("Let's shake hands with me!")}
          </p>
          <div className="intro-contact">
            <button id="hire-me" onClick={handleContact}>
              {t("Hire me")}
            </button>
            <button>
              <FaGithub id="icons" />
              &nbsp; Github
            </button>
            <button>
              <FaLinkedinIn id="icons" />
              &nbsp; Linkedin
            </button>
          </div>
        </div>
        <div className="right-section">
          <img src={img1} alt="fotoğraf" />
        </div>
      </div>
    </>
  );
}
