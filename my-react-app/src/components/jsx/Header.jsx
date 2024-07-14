import "../css/Header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="toggle">
        <button>Dark Mode</button>
        <p>Türkçe'ye Geç</p>
      </div>
      <div className="navigation">
        <p>Skills</p>
        <p>Projects</p>
        <button>Hire me</button>
      </div>
    </div>
  );
}
