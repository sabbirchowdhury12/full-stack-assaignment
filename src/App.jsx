import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import APITask from "./components/APITask";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "send-api",
    element: <APITask />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
