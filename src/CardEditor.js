import React, { useState } from 'react';

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
      <button type="button" onClick={() => addCard({ front, back })}>add card</button>
      <hr />
      <button type="button" onClick={() => props.switchMode()}>switch to card viewer</button>
    </div>

  );
}

export default CardEditor;
