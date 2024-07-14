import Project from "./Project";

const projeler = [
  {
    id: "1",
    img: "",
    ad: "Workintech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo.",
  },
  {
    id: "2",
    img: "",
    ad: "Random Jokes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo.",
  },
  {
    id: "3",
    img: "",
    ad: "Journey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo.",
  },
];

export default function Projects() {
  return (
    <>
      <div className="projeler">
        <h3 id="baslik">Projects</h3>
        {projeler.map((proje) => (
          <Project key={proje.id} proje={proje} />
        ))}
      </div>
    </>
  );
}
