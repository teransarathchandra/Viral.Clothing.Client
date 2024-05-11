import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "@components/common/Navbar/Navbar";
import Home from "@pages/Home";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          Component={Home}
          key="/"
          path="/"
        />
      </Routes>
    </>
  );
}

export default App;
