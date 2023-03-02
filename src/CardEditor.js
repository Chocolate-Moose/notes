import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function CardEditor(props) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const addCard = (card) => {
    props.addCard(card);
    setFront('');
    setBack('');
  };

  // eslint-disable-next-line no-unused-vars
  const deleteCard = (index) => {
    props.deleteCard(index);
  };

  const cards = props.cards.map((card, index) => {
    return (
      <Card card={card} deleteCard={deleteCard} saveCard={props.saveCard} index={index} />
    );
  });

  return (
    <div>
      <h2>Card Editor</h2>
      <table>
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cards}
        </tbody>
      </table>
      <br />
      <input placeholder="front of card" value={front} onChange={(e) => setFront(e.target.value)} />
      <input placeholder="back of card" value={back} onChange={(e) => setBack(e.target.value)} />
      <button type="button" disabled={front === '' || back === ''} onClick={() => addCard({ front, back })}>add card</button>
      <hr />
      <Link to="/view">Go to card viewer</Link>
    </div>

  );
}

export default CardEditor;
