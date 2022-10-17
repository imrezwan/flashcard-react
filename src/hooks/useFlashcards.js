import { useEffect, useState } from "react";

const INITIAL_FLASHCARDS = [
    { id: 1, front: "Component", back: "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen."},
    { id: 2, front: "Class Based Component", back: "They are the normal JS class which extends React.Component. With this it has access to state and all the lifecycle methods."},
    { id: 3, front: "Functional Component", back: "React functional component is a way to write a component in React without using a class. Functional component are easy to write and understand. And we can use react hooks inside functional components."},
    { id: 4, front: "Props", back: "When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”." },
    { id: 5, front: "Conditional Rendering", back: "Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them." },
    { id: 6, front: "Composition vs Inheritance", back: "React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components." },
    { id: 7, front: "State", back: "React State can be thought of as a variable in which we store some data. We can tell React to re-render our view when these \"state\" variables change by using setState()." },
    { id: 8, front: "Declarative Syntax", back: "React uses Declarative Syntax which means that if we want something we just write it down instead of creting it from scratch. Eg: If we want a checkbox we might use something like <Checkbox />" },
    { id: 9, front: "Library not a Framework", back: "React JS is a library and not a framework. This means that we can import React.js in any of our html css js project." },
    { id: 10, front: "Everything is a Component", back: "When using React everything is a component. That button, This page, That Navbar everything." },
    { id: 11, front: "React Hooks", back: "React hooks are the functions which allows to use state, lifecycle methods and other react features. Hooks are not used inside class based component. Example: useState, useEffect, useMemo, useContext etc." },
    {id: 12,front: "UseState", back:"React useState hook lets you add state to React components.The useState hook takes a single argument, which is the initial state and gives method to modify that state"},
    {id: 13,front: "UseEffect", back:"React's useEffect hook lets you perform side effects in function components. By default, effects run after every completed render, but you can choose to fire them only when certain values have changed."},
    { id: 14, front: "React Lifecycle Methods", back: "React Component has a lifecycle, which can be monitored and manipulated during its phases. The phases of lifecycle in React Component are: Mounting, Updating & Unmounting." },
    { id: 15, front: "Higher Order Components (HOC)", back: "Higher order components is a advance technique in react. It is a function that takes a component and returns a new component. Example: withAuth(ProfilePage). Here withAuth is a HOC and ProfilePage is a component." },
    { id: 16, front: "Memoization in React", back: "Memoization is a optimizaion technique in react. It helps to improve performance of application by preventing unnecessary re-renders and caching. React has in-build hooks useMemo() in order to implement memoization." },
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
