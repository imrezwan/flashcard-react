import { useEffect, useState } from "react";

const INITIAL_FLASHCARDS = [
    { id: 1, front: "Component", back: "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen."},
    { id: 2, front: "Props", back: "When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”." },
    { id: 3, front: "Conditional Rendering", back: "Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them." },
    { id: 4, front: "Composition vs Inheritance", back: "React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components." },
    { id: 5, front: "Uses", back: " It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript." },
    { id: 6, front: "Type", back: "ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application." },
    { id: 7, front: "Aim", back: "Its aim is to allow developers to easily create fast user interfaces for websites and applications alike." },
    { id: 8, front: "Versus", back: "React is better than Angular due to it's virtual DOM implementation and rendering optimizations." },
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
