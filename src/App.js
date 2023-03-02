/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

function App(props) {
  const [cards, setCards] = useState([
    { front: 'door', back: 'something you walk through' },
    { front: 'pape', back: 'dali cto' },
    { front: 'hamburger', back: 'a meat stack' },
    { front: 'computer', back: 'a non-meat stack' },
    { front: 'notion', back: 'the pinnacle of human achievement' },
    { front: 'two-column layout', back: 'the bane of my existence' },
  ]);

  const addCard = (card) => {
    const newCards = cards.slice().concat(card);
    setCards(newCards);
  };

  const deleteCard = (index) => {
    const newCards = cards.slice();
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const saveCard = (index, front, back) => {
    const newCards = cards.slice();
    newCards.splice(index, 1, { front, back });
    setCards(newCards);
  };

  return (
    <Router>
      <Routes>
        <Route path="/edit" element={<CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} saveCard={saveCard} />} />
        <Route path="/view" element={<CardViewer cards={cards} />} />
        <Route
          path="*"
          element={<Navigate to="/edit" />}
        />
      </Routes>
    </Router>

  // <div>
  //   {editor ? <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} /> : <CardViewer cards={cards} switchMode={switchMode} />}
  // </div>

  );
}

export default App;
