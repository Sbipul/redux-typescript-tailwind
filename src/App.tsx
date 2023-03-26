import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { FC } from "react";
const App: FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
