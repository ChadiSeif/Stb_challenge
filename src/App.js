import "./App.css";
import { Routes, Route } from "react-router-dom";
import Partie1 from "./Partie1";
// import Partie2 from "./Partie2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Partie1 />} />
      </Routes>
    </div>
  );
}

export default App;
