import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardEditor(props) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const addCard = (card) => {
    props.addCard(card);
    setFront('');
    setBack('');
  };

  const deleteCard = (index) => {
    props.deleteCard(index);
  };

  const cards = props.cards.map((card, index) => {
    return (
      <tr key={card.id}>
        <td>{card.front}</td>
        <td>{card.back}</td>
        <td><button type="button" onClick={() => deleteCard(index)}>edit card</button></td>
        <td><button type="button" onClick={() => deleteCard(index)}>delete card</button></td>
      </tr>
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
