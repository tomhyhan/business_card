import React from 'react';
import styles from './view_card.module.css';

const DEFAULT_IMAGE = 'images/default_logo.png';

const ViewCard = ({ card }) => {
  const { name, company, theme, jobTitle, email, message, fileURL } = card;

  const imageURL = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.preview} ${getTheme(theme)}`}>
      <img className={styles.profileImg} src={imageURL} alt='profile' />
      <div className={styles.information}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.jobTitle}>{jobTitle}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getTheme(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      return new Error('This is not a theme available');
  }
}
export default ViewCard;
