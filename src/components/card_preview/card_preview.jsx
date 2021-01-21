import React from 'react';
import styles from './card_preview.module.css';
import ViewCard from '../view_card/view_card';

const CardPreview = ({ cards }) => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.ul}>
        {Object.keys(cards).map((key) => {
          return <ViewCard key={key} card={cards[key]} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default CardPreview;
