import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Applayout from "./layout/Applayout";
import Medics from "./pages/projects/Medics";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/studies/medics" element={<Medics />} />
      </Route>
    </Routes>
  );
}

export default App;
