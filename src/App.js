import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Toolbar from './components/Toolbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import { useFlashcards } from './hooks/useFlashcards';

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return {
    height
  };
}

function App() {
  const [allCards] = useFlashcards();
  const totalCards = allCards.length;
  const [curCardId, setCurCardId] = useState(1);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [mode, setMode] = useState('light');

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div style={{  
      backgroundColor: mode === 'light' ? "rgb(204, 248, 204)" : "rgb(0, 0, 0)",
      backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: windowDimensions.height,
    }}>
    <div style={{float: 'right', marginRight: "30px", marginTop: "20px"}}>
    <input type="checkbox" class="checkbox" id="checkbox" />
      <label for="checkbox" class="label" onClick={e => setMode(mode === 'light' ? 'dark' : 'light')}>
        <BsFillMoonFill style={{color: "pink"}}/>
        <BsFillSunFill style={{color: "yellow"}}/>
        <div class='ball'></div>
      </label>
    </div>
    <Container className="container-main">
      <Toolbar></Toolbar>
      <Card {...allCards.find(item=> item.id === curCardId)}></Card>
      <div className="action-buttons">
        <Button variant="warning" className="me-4 prev-next-btns" onClick={goToPrev}>Prev</Button>
        <Button variant="success" className="ms-4 prev-next-btns" onClick={goToNext}>Next</Button>
      </div>
    </Container>
    </div>
  );
}

export default App;
