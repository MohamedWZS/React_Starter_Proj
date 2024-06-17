import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem)=> (<CoreConcept {...conceptItem} />) )}
                {/* you can write the props like this if their names are the same as the property name of the object */}
                {/* <CoreConcept {...Card[0]} /> */}
                {/* <CoreConcept
                    title={Card[1].title}
                    description={Card[1].description}
                    image={Card[1].image}
                />
                <CoreConcept
                    title={Card[2].title}
                    description={Card[2].description}
                    image={Card[2].image}
                />
                <CoreConcept
                    title={Card[3].title}
                    description={Card[3].description}
                    image={Card[3].image}
                /> */}
            </ul>
        </Section>
    );
}