import "./App.css";
import Chiffre from "./components/Chiffre";
import Equipe from "./components/Equipe";
import Invest from "./components/Invest";
import { Map } from "./components/Map";
import Presentation from "./components/Presentation";
import Valeurs from "./components/Valeurs";

function App() {
  return (
    <div className="App">
      <Presentation />
      <Chiffre />
      <Invest />
      <Valeurs />
      <Equipe />
      <Map />
    </div>
  );
}

export default App;
