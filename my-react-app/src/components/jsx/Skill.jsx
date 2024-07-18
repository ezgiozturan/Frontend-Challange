import "../css/Skill.css";

export default function Skill({ beceri }) {
  return (
    <>
      <div className="skill">
        <h4 id="skill-baslik">{beceri.dil}</h4>
        <p id="skill-aciklama">{beceri.description}</p>
      </div>
    </>
  );
}
