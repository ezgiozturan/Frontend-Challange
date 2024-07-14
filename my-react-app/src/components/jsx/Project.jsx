export default function Project({ proje }) {
  return (
    <>
      <div>
        <p>{proje.img}</p>
        <h4>{proje.ad}</h4>
        <p>{proje.description}</p>
        <div className="teknolojiler">
          <p>react</p>
          <p>redux</p>
          <p>axios</p>
        </div>
        <div>
          <p>Github</p>
          <p>View Site</p>
        </div>
      </div>
    </>
  );
}
