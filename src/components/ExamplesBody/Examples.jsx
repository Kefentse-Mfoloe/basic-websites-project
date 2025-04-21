import { useState } from "react";
import { EXAMPLES } from "../../data";
import Example from "./Expample";
import TabButtons from "./TabButtons";
import Section from "../Section";

function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState('components');
    
    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }
    
    return (
      <Section id="examples" title={"Examples"}>
        <TabButtons selectedTopic={selectedTopic} handleClick={handleClick} />
        <Example {...EXAMPLES[selectedTopic]} />
      </Section>
    );
}

export default Examples;