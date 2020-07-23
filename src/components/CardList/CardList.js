import React, {useState} from 'react';
import {Card} from '../Card/Card';
import cn from 'classnames';
import './CardList.scss';

const cards = [
  {id: '1', title: "card1", img: 'img_1.jpg'},
  {id: '2', title: "card1", img: 'img_2.jpg'},
  {id: '3', title: "card1", img: 'img_3.jpg'},
  {id: '4', title: "card1", img: 'img_4.jpg'},
  {id: '5', title: "card1", img: 'img_5.jpg'},
  {id: '6', title: "card1", img: 'img_6.jpg'},
  {id: '7', title: "card1", img: 'img_7.jpg'},
  {id: '8', title: "card1", img: 'img_8.jpg'},
  {id: '9', title: "card1", img: 'img_9.jpg'},
];

export const CardList = () => {
  const [grid, setGrid] = useState(false);

  const cardListClass = cn({
    cardlist: true,
    'cardlist--grid': grid,
  });

  return (
    <>
    <div className="btn-panel" style={{display: 'flex'}}>
      <button type="button" className="switch-button" onClick={() => {setGrid(true)}}><img src="block_btn.svg" alt="switch_btn" /></button>
      <button className="switch-button" onClick={() => {setGrid(false)}}><img src="card_btn.svg" alt="switch_btn" /></button>
    </div>
      <ul className={cardListClass}>
        {cards.map(card => (
          <Card grid={grid} card={card}/>   
        ))}
      </ul>
    </>
  );
}

/*

    /*<Card
            {...card}
            key={card.id}
          />
  }*/