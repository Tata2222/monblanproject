import React from 'react';
import cn from 'classnames';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Card.scss';

export const Card = ({grid, card}) => {
  console.log(card)
 
  const cardClass = cn({
    'card': !grid,
    'card-square': grid,
  });

  const color = grid ? 'white' : 'black';

  return (
    <section className={`${cardClass}`}>
      <div className={`${cardClass}__img-container`}>
        <img className={`${cardClass}__img`} src={card.img} alt={`img_${card.id}`} />
      </div> 

      <div className={`${cardClass}__info`}>
        <div className={`${cardClass}__info-today`}>
          <p className={`${cardClass}-title`}>Today</p>
          <div className={`${cardClass}__info-panel`}>
            <div className={`${cardClass}__info-likes`}>
              <FavoriteIcon style={{ fontSize: 20, color: `${color}`}}/>
              <span className="card__info-count">128</span>
            </div>
            <div className={`${cardClass}-comments`}>
              <ChatBubbleIcon style={{ fontSize: 20, color: `${color}`}}/>
              <span className="card__info-count">31</span>
            </div>
          </div>
        </div>
        <div className={`${cardClass}__info-date`}>
          <p className={`${cardClass}-title`}>9-08-2016</p>
          <div className={`${cardClass}__info-panel`}>
            <div className={`${cardClass}__info-likes`}>
              <FavoriteIcon style={{ fontSize: 20, color: `${color}`}}/>
              <span className="card__info-count">128</span>
            </div>
            <div className={`${cardClass}-comments`}>
              <ChatBubbleIcon style={{ fontSize: 20, color: `${color}`}}/>
            <span className="card__info-count">31</span>
            </div>
          </div>
        </div>
        <div className={`${cardClass}__info-upload`}>
          <p className={`${cardClass}-title`}>Image upload</p>
          <p className={`${cardClass}__info-panel`}>11-04-2016</p>
        </div>
       
      </div>
    
    </section>
  );
}

