/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react';

function Card(props) {
  const {
    card, deleteCard, index, saveCard,
  } = props;
  const [editing, setEditing] = useState(false);
  const [editedFront, setEditedFront] = useState(card.front);
  const [editedBack, setEditedBack] = useState(card.back);

  const displayCard = () => {
    if (editing) {
      return (
        <>
          <td><input placeholder="front of card" onChange={(e) => setEditedFront(e.target.value)} value={editedFront} /></td>
          <td><input placeholder="back of card" onChange={(e) => setEditedBack(e.target.value)} value={editedBack} /></td>
        </>

      );
    } else {
      return (
        <>
          <td>{card.front}</td>
          <td>{card.back}</td>
        </>
      );
    }
  };

  const saveThisCard = () => {
    setEditing(false);
    saveCard(index, editedFront, editedBack);
  };

  const displayEditButton = () => {
    if (editing) {
      return (<td><button type="button" onClick={() => saveThisCard()}>save card</button></td>);
    } else {
      return (<td><button type="button" onClick={() => setEditing(true)}>edit card</button></td>);
    }
  };

  return (
    <tr key={card.id}>
      {displayCard()}
      {displayEditButton()}

      <td><button type="button" onClick={() => deleteCard(index)}>delete card</button></td>
    </tr>

  );
}

export default Card;
