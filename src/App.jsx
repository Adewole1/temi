import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import PageLoader from "./components/PageLoader";

import "./App.css";
import "animate.css";

const Homepage = lazy(() => import("./pages/homepage"));
const Applayout = lazy(() => import("./layout/Applayout"));
const Medics = lazy(() => import("./pages/projects/Medics"));
const PPN = lazy(() => import("./pages/projects/PPN"));
const Tracehut = lazy(() => import("./pages/projects/Tracehut"));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/studies/medics" element={<Medics />} />
          <Route path="/studies/ppn" element={<PPN />} />
          <Route path="/studies/tracehut" element={<Tracehut />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
