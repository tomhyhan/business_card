import React, { useEffect, useState } from 'react';
import styles from './card.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';

const Card = ({ authService, FileInput, cardDB }) => {
  const history = useHistory();
  const historyState = useHistory().state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardDB.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardDB]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  const deleteCard = (card) => {
    setCards((cards) => {
      const updatedCard = { ...cards };
      delete updatedCard[card.id];
      return updatedCard;
    });
    cardDB.removeCard(userId, card);
  };

  const updateCard = (card) => {
    setCards((cards) => {
      const updatedCard = { ...cards };
      updatedCard[card.id] = card;
      return updatedCard;
    });
    cardDB.saveCard(userId, card);
  };

  return (
    <main className={styles.main}>
      <Header onLogout={onLogout}></Header>
      <section className={styles.card}>
        <div className={styles.cardMaker}>
          <CardMaker
            FileInput={FileInput}
            cards={cards}
            addcard={updateCard}
            deleteCard={deleteCard}
            updateCard={updateCard}
          />
        </div>
        <div className={styles.cardPreview}>
          <CardPreview cards={cards} />
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Card;
