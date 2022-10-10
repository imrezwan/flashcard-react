import { useEffect, useState } from "react";

const INITIAL_FLASHCARDS = [
    { id: 1, front: "Component", back: "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen."},
    { id: 2, front: "Props", back: "When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”." },
    { id: 3, front: "Conditional Rendering", back: "Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them." },
    { id: 4, front: "Composition vs Inheritance", back: "React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components." },
    { id: 5, front: "State", back: "The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders." },
    { id: 6, front: "Lists", back: "Lists are used to display data in an ordered format and mainly used to display menus on websites. In React, Lists can be created in a similar way as we create lists in JavaScript." },
    { id: 7, front: "Keys", back: "A key is a special string attribute you need to include when creating lists of elements in React.Keys help React identify which items have changed (added/removed/re-ordered)." },
    { id: 8, front: "Formes", back: "Handling forms is about how you handle the data when it changes value or gets submitted. In React, form data is usually handled by the components." },
];

const FLASHCARDS_KEY = 'flashcards';

function getStorageFlashcards() {
    const cards = localStorage.getItem(FLASHCARDS_KEY);
    return JSON.parse(cards) || INITIAL_FLASHCARDS;
}

export function useFlashcards() {
    const [flashCards] = useState(getStorageFlashcards);

    useEffect(() => localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(flashCards)), [flashCards]);

    return [flashCards];
}
