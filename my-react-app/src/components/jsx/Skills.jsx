import Skill from "./Skill";
export const beceriler = [
  {
    id: "1",
    dil: "Java Script",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo. ",
  },
  {
    id: "2",
    dil: "React.JS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo. ",
  },
  {
    id: "2",
    dil: "Node.JS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla, tempus eu elementum quis, egestas eu justo. ",
  },
];

export default function Skills() {
  return (
    <>
      <div className="skiller">
        <h3 id="baslik">Skills</h3>
        {beceriler.map((beceri) => (
          <Skill key={beceri.id} beceri={beceri} />
        ))}
      </div>
    </>
  );
}
