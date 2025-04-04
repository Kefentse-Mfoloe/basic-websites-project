import { useState } from "react";
import Header from "./components/Header/Header";
import Concept from "./components/Concept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./TabButton";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (<Concept key={conceptItem.title} {...conceptItem}/>))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].desciption}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

export default App;
