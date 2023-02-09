import React, { useState } from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

function App(props) {
  const [cards, setCards] = useState([
    { front: 'door', back: 'something you walk through' },
    { front: 'pape', back: 'dali cto' },
  ]);

  const [editor, setEditor] = useState(false);

  const addCard = (card) => {
    const newCards = cards.slice().concat(card);
    setCards(newCards);
  };

  const deleteCard = (index) => {
    const newCards = cards.slice();
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const switchMode = () => {
    setEditor(!editor);
  };

  return (
    <div>
      {editor ? <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} /> : <CardViewer cards={cards} switchMode={switchMode} />}
    </div>

  );
}

export default App;
