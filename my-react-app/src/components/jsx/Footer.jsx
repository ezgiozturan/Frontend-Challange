import "../css/Footer.css";
import { FaHandPointRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-footer">
        <h3> {t("Let's work together on your next product.")} </h3>
        <div className="contact">
          <p>
            <FaHandPointRight /> ezgiozturan05@gmail.com
          </p>
          <div className="git-linked">
            <button id="github">Github</button>
            <button id="linkedin">Linkedin</button>
          </div>
        </div>
      </div>
    </>
  );
}
