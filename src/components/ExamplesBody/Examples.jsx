import { useState } from "react";
import { EXAMPLES } from "../../data";
import Example from "./Expample";
import TabButtons from "./TabButtons";

function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState('components');
    
    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }
    
    return (
      <section id="examples">
        <h2>Examples</h2>
        <TabButtons selectedTopic={selectedTopic} handleClick={handleClick} />
        <Example {...EXAMPLES[selectedTopic]} />
      </section>
    );
}

export default Examples;