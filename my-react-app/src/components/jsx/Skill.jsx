export default function Skill({ beceri }) {
  return (
    <>
      <h4 id="baslik">{beceri.dil}</h4>
      <p id="aciklama">{beceri.description}</p>
    </>
  );
}
