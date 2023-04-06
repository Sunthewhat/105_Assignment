import { useNavigate } from "react-router-dom";
import me from "../assets/Sun.jpg";

function AdminPage() {
  const navigate = useNavigate();
  return (
    <>
      <img
        src={me}
        alt="lost img"
        style={{
          margin: "15px auto",
        }}></img>
      <h1
        style={{
          margin: "5px auto",
          display: "flex",
        }}>
        This is Admin Page
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
        Log out
      </button>
    </>
  );
}

export default AdminPage;
