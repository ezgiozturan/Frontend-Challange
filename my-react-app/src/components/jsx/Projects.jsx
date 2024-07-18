import "../css/Projects.css";
import Project from "./Project";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import { useTranslation } from "react-i18next";

const projeler = [
  {
    id: "1",
    img: img2,
    ad: "Workintech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo.",
  },
  {
    id: "2",
    img: img3,
    ad: "Random Jokes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo.",
  },
  {
    id: "3",
    img: img4,
    ad: "Journey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo.",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <div className="projects-container">
        <h3 id="projects-baslik">{t("Projects")}</h3>
        <div className="projeler">
          {projeler.map((proje) => (
            <Project key={proje.id} proje={proje} />
          ))}
        </div>
      </div>
    </>
  );
}
