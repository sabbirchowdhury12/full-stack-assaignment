import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline" }}>
        Full Stack Web Development Internship
      </h2>

      <div>
        <h4>Task:1 </h4>
        <p>Send Api to Server</p>
        <Link to={"send-api"}>Live</Link>
      </div>
      <div>
        <h4>Task:2 </h4>
        <p> UPI Scanner generator</p>
        <Link to={"QR-scanner"}>Live</Link>
      </div>
    </div>
  );
};

export default Main;
