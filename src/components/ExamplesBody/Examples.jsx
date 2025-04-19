import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import { TAB_BUTTONS } from "../../data";
import Example from "./Expample";

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
        <Example {...EXAMPLES[selectedTopic]} />
      </section>
    );
}

export default Examples;