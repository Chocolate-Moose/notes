import React, { useState } from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

function App(props) {
  const [cards, setCards] = useState([
    { front: 'front', back: 'back' },
    { front: 'front1', back: 'back1' },
  ]);

  const [editor, setEditor] = useState(true);

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
      {editor ? <CardEditor cards={cards} addCard={addCard} deleteCard={deleteCard} switchMode={switchMode} /> : <CardViewer switchMode={switchMode} />}
    </div>

  );
}

export default App;
