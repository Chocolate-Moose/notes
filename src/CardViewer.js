import React, { useState } from 'react';

function CardViewer(props) {
  // eslint-disable-next-line no-unused-vars
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
      <button type="button" onClick={() => setDisplayFront(!displayFront)}>flip card</button>
      <hr />
      <button type="button" onClick={() => props.switchMode()}>switch to card editor</button>
    </div>

  );
}

export default CardViewer;
