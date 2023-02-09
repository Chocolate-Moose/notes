import React, { useState } from 'react';

function CardViewer(props) {
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(0);

  const displayCard = () => {
    const card = props.cards[index];

    return (
      <div>
        <p>{card.front}</p>
        <p>{card.back}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>card viewer</h2>
      {displayCard()}
      <hr />
      <button type="button" onClick={() => props.switchMode()}>switch to card editor</button>
    </div>

  );
}

export default CardViewer;
