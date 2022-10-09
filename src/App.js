import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Toolbar from './components/Toolbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DataSource from './datasource';

function App() {
  const localStorage = window.localStorage
  const allCards = DataSource.getAllFlashcards();
  const totalCards = allCards.length;
  const [curCardId, setCurCardId] = useState(1);

  //Store all files from the data source in local storage otherwise none of the cards can be rendered :)
  allCards.map((card)=>{
    return localStorage.setItem(card.id,JSON.stringify({id: card.id ,front: card.front, back:card.back}) )
  })

  //Convert the cards back from local storage to an array 
  const getAllCards = () =>{
    let cards = []
    for(let i = 1; i<=localStorage.length; i++){
      let card = JSON.parse(localStorage.getItem(i))
      cards.push(card)
    }
    return cards
  }
  let newCards = getAllCards()

  let goToPrev = () => {
    if ( isValidId(curCardId - 1)) {
      setCurCardId(curCardId - 1);
    }
    else {
      setCurCardId(totalCards);
    }
  }

  let goToNext = () => {
    if ( isValidId(curCardId + 1)) {
      setCurCardId(curCardId + 1);
    }
    else {
      setCurCardId(1);
    }
  };

  function isValidId(id) {
    return ( id <= totalCards && id >= 1);
  }

  return (
    <Container className="container-main">
      <Toolbar></Toolbar>
      <Card {...newCards.find(item=> item.id === curCardId)}></Card>
      <div className="action-buttons">
        <Button variant="warning" className="me-4 prev-next-btns" onClick={goToPrev}>Prev</Button>
        <Button variant="success" className="ms-4 prev-next-btns" onClick={goToNext}>Next</Button>
      </div>
    </Container>
  );
}

export default App;
