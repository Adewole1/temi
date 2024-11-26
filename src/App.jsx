import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Applayout from "./layout/Applayout";
import Medics from "./pages/projects/Medics";
import PPN from "./pages/projects/PPN";
import Tracehut from "./pages/projects/Tracehut";

import "animate.css";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/studies/medics" element={<Medics />} />
        <Route path="/studies/ppn" element={<PPN />} />
        <Route path="/studies/tracehut" element={<Tracehut />} />
      </Route>
    </Routes>
  );
}

export default App;
