import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardViewer(props) {
  const [index, setIndex] = useState(0);
  const [displayFront, setDisplayFront] = useState(true);

  const displayCard = () => {
    const card = displayFront ? props.cards[index].front : props.cards[index].back;

    return (
      <div>
        <p>{card}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>card viewer</h2>
      <p>Card {index + 1}/{props.cards.length}</p>
      {displayCard()}
      <button type="button" disabled={index === 0} onClick={() => setIndex(index - 1)}>previous card</button>
      <button type="button" onClick={() => setDisplayFront(!displayFront)}>flip card</button>
      <button type="button" disabled={index === props.cards.length - 1} onClick={() => setIndex(index + 1)}>next card</button>

      <hr />
      {/* <button type="button" onClick={() => props.switchMode()}>switch to card editor</button> */}
      <Link to="/edit">Go to card editor</Link>
    </div>

  );
}

export default CardViewer;
