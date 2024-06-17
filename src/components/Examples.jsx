import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function () {
    // Initialize selectedTopic with "components"
    // setSelectedTopic Function updates the selectedTopic variables when the button is clicked
    const [selectedTopic, setSelectedTopic] = useState();

    // Function to handle button click and update state
    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>please choose a tab.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                ButtonContainer="menu"  // we pass default attributes between "" and custom attributes between {}
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onClick={() => handleClick("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onClick={() => handleClick("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onClick={() => handleClick("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onClick={() => handleClick("state")}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
