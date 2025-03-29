import Header from "./components/Header/Header";
import Concept from "./components/Component";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./TabButton";

function App() {
  function handleClick() {
    console.log('Hello World!');
}
  
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
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={handleClick}>Components</TabButton>
          <TabButton onSelect={handleClick}>JSX</TabButton>
          <TabButton onSelect={handleClick}>Props</TabButton>
          <TabButton onSelect={handleClick}>State</TabButton>
        </menu>
      </section>
    </div>
  );
}

export default App;
