import Skill from "./Skill";
import "../css/Skills.css";
import { useTranslation } from "react-i18next";
export const beceriler = [
  {
    id: "1",
    dil: "Java Script",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel.  ",
  },
  {
    id: "2",
    dil: "React.JS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. ",
  },
  {
    id: "2",
    dil: "Node.JS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel.  ",
  },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <div className="skill-container">
        <h3 id="skills-baslik">{t("Skills")}</h3>
        <div className="skiller">
          {beceriler.map((beceri) => (
            <Skill key={beceri.id} beceri={beceri} />
          ))}
        </div>
      </div>
    </>
  );
}
