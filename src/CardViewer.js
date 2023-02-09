import React, { useState } from 'react';

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
      {displayCard()}
      <button type="button" onClick={() => setIndex(index - 1)}>previous card</button>
      <button type="button" onClick={() => setDisplayFront(!displayFront)}>flip card</button>
      <button type="button" onClick={() => setIndex(index + 1)}>next card</button>

      <hr />
      <button type="button" onClick={() => props.switchMode()}>switch to card editor</button>
    </div>

  );
}

export default CardViewer;
