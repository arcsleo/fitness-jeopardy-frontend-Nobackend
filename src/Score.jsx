import React, { useState, useEffect } from 'react';

export const Score = (props) => {
  const { storageKey } = props;
  const [score, setScore] = useState(parseInt(localStorage.getItem(storageKey)) || 0);
  const [change, setChange] = useState('');

  const handleChange = (e) => {
    let value = parseInt(e.target.value);

    if (value)
      setChange(value);
    else
      setChange(e.target.value);
  };

  const addScore = () => {
    if (Number.isInteger(change)) {
      setScore(prevScore => prevScore + change);
      setChange('');
    }
  };

  useEffect(() => {
    localStorage.setItem(storageKey, score);
  }, [storageKey, score]);

  return (
    <div className='score-container'>
      <h1 className='score'>{score} points</h1>
      <input value={change} onChange={handleChange} />
      <button onClick={addScore}>Add points</button>
    </div>
  );
};
