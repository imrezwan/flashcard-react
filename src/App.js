import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Toolbar from './components/Toolbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DataSource from './datasource';

function App() {
  const allCards = DataSource.getAllFlashcards();
  const totalCards = allCards.length;
  const [curCardId, setCurCardId] = useState(1);

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
      <Card {...allCards.find(item=> item.id === curCardId)}></Card>
      <div className="action-buttons">
        <Button variant="warning" className="me-4" onClick={goToPrev}>Prev</Button>
        <Button variant="success" className="ms-4" onClick={goToNext}>Next</Button>
      </div>
    </Container>
  );
}

export default App;
