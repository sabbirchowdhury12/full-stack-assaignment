import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import APITask from "./components/APITask";
import QRCodeGenerator from "./components/QRCodeGenerator";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "send-api",
    element: <APITask />,
  },
  {
    path: "QR-scanner",
    element: <QRCodeGenerator />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
