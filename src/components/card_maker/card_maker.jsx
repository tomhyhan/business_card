import React from 'react';
import AddCard from '../add_card/add_card';
import EditCard from '../edit_card/edit_card';
import styles from './card_maker.module.css';

const CardMaker = ({ FileInput, cards, addcard, deleteCard, updateCard }) => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => {
        return (
          <EditCard
            key={key}
            FileInput={FileInput}
            card={cards[key]}
            onDelete={deleteCard}
            updateCard={updateCard}
          ></EditCard>
        );
      })}
      <AddCard FileInput={FileInput} onAdd={addcard}></AddCard>
    </React.Fragment>
  );
};

export default CardMaker;
