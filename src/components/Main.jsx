import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline" }}>
        Full Stack Web Development Internship
      </h2>

      <h4>Task:1 </h4>
      <p>Send Api to Server</p>
      <Link to={"send-api"}>Live</Link>
    </div>
  );
};

export default Main;
