import "../styles/Card.css";
function Card(user) {
  const { Name, Job, Hobby } = user;
  return (
    <section className="card-container">
      <p className="Card_Name">Name: {Name}</p>
      <p className="Card_Job">Job: {Job}</p>
      <p className="Card_Hobby">Hobby: {Hobby}</p>
    </section>
  );
}
export default Card;
