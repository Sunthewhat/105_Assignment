import Card from "./Card";

function List({ users }) {
  const person = [
    { Name: "John doe", Job: "Engineer", Hobby: "Listen to music" },
    { Name: "John smith", Job: "Artist", Hobby: "Write song" },
    { Name: "Jane doe", Job: "House wife", Hobby: "Gardening" },
  ];
  return (
    <section>
      {person.map((e) => {
        return <Card name={e.Name} Job={e.Job} Hobby={e.Hobby}></Card>;
      })}
    </section>
  );
}

export default List;
