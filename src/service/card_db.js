import { firebaseDatabase } from './firebase';

class CardDB {
  saveCard = (userId, card) => {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  };

  removeCard = (userId, card) => {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  };

  syncCards = (userId, updateCard) => {
    const ref = firebaseDatabase.ref(`${userId}/cards`);

    ref.on('value', (snapshot) => {
      const cards = snapshot.val();
      cards && updateCard(cards);
    });

    return () => ref.off();
  };
}

export default CardDB;
