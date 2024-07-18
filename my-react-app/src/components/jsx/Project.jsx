import "../css/Project.css";
import { useTranslation } from "react-i18next";

export default function Project({ proje }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="project-container">
        <img src={proje.img} alt={proje.ad} />
        <h4>{proje.ad}</h4>
        <p id="project-aciklama">{proje.description}</p>
        <div className="teknolojiler">
          <button>react</button>
          <button>redux</button>
          <button>axios</button>
        </div>
        <div className="links">
          <button>Github</button>
          <button>{t("View Site")}</button>
        </div>
      </div>
    </>
  );
}
