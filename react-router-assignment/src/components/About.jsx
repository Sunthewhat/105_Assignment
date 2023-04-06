import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1
        className="name"
        style={{
          margin: "10px auto",
          display: "flex",
        }}>
        This is About page
      </h1>
      <button
        style={{
          margin: "20px auto",
          display: "flex",
          backgroundImage: "linear-gradient(to right, #3acadf, #651fff 95%)",
          color: "white",
          padding: "10px ",
          borderRadius: "5px",
          border: "none",
          fontWeight: "bold",
          fontSize: "13px",
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => navigate("/")}>
        Redirect
      </button>
    </>
  );
}
export default About;