import React, { useState, useEffect } from 'react';

export const Card = (props) => {
  const { number, text, storageKey, link, trainer, trainerData } = props;
  const [reveal, setReveal] = useState(parseInt(localStorage.getItem(storageKey)) || 0);

  // 0 = number, 1 = text, 2 = off
  const toggleReveal = () => {
    if( reveal === 0 )
      setReveal(1);
    else
      setReveal(0);
  };

  useEffect(() => {
    localStorage.setItem(storageKey, reveal);
  }, [storageKey, reveal]);

  return (
    <>
      { trainer === "" ?
          <div className='jeopardy-card' onClick={()=>toggleReveal()}>
            {reveal === 0 ? <h2>{number}</h2> : reveal === 1 ? <a className='jeopardy-link' href={link} target="_blank">{text}</a> : ''}
          </div>
        : (
          trainerData.map((value)=>{
            return(
              value.trainerName === trainer ? 
                <div className='jeopardy-card' style={{background: value.gradientColor}} onClick={()=>toggleReveal()}>
                  {reveal === 0 ? <h2 style={{color: "#fff"}}>{number}</h2> : reveal === 1 ? <a className='jeopardy-link' href={link} target="_blank">{text}</a> : ''}
                </div>
              : null
            );
          })
        )
      }
      {/* { trainerData.map((value)=>{
        return(
          trainer === "" ?
            <div className='jeopardy-card'>
              {reveal === 0 ? <h2>{number}</h2> : reveal === 1 ? <a className='jeopardy-link' href={link}>{text}</a> : ''}
            </div>
          : null
          // ( trainer === value.trainerName ?
          //   <div className='jeopardy-card' style={{background: value.gradientColor}} >
          //     {reveal === 0 ? <h2>{number}</h2> : reveal === 1 ? <a className='jeopardy-link' href={link}>{text}</a> : ''}
          //   </div>
          // : null )
        );
      }) } */}
    </>
  );
};
