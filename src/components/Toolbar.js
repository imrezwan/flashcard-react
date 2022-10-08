import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Toolbar(props) {
    return (
        <Navbar bg="light">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/flash-cards.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                React Flashcard
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
