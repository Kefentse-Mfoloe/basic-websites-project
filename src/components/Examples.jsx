import { useState } from "react";
import TabButton from "../TabButton";
import { EXAMPLES } from "../data";
import { TAB_BUTTONS } from "../data";

function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState('components');
    
    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }
    
    return (
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {TAB_BUTTONS.map((tabButtonItem) => (
            <TabButton key={tabButtonItem}
              isSelected={selectedTopic === tabButtonItem}
              onSelect={() => handleClick(tabButtonItem)}
            >{tabButtonItem}</TabButton>
          ))}
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].desciption}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </section>
    );
}

export default Examples;