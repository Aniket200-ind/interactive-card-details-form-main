import "./App.css";
import { Dark } from "./components/Dark";
import { Light } from "./components/Light";

function App() {
  return (
    <main className="flex flex-col h-screen font-spaceg sm:flex-row">
      <Dark />
      <Light />
    </main>
  );
}

export default App;
