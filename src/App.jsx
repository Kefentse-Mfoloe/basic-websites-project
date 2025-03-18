import Header from "./components/header";
import Concept from "./components/component";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <ul>
          <Concept {...CORE_CONCEPTS[0]}/>
          <Concept {...CORE_CONCEPTS[1]}/>
          <Concept {...CORE_CONCEPTS[2]}/>
          <Concept {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
