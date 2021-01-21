import React from 'react';
import Button from '../button/button';
import styles from './edit_card.module.css';

const EditCard = ({ FileInput, card, onDelete, updateCard }) => {
  const { name, company, theme, jobTitle, email, message, fileName } = card;

  const onSubmit = (event) => {
    event.preventDefault();
    onDelete(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    const { url, name } = file;
    updateCard({
      ...card,
      fileName: name,
      fileURL: url,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name='theme'
        value={theme}
        onChange={onChange}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='jobTitle'
        value={jobTitle}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name='message'
        id=''
        rows='3'
        onChange={onChange}
        value={message}
      />
      <div className={styles.buttons}>
        <FileInput name={fileName} onFileChange={onFileChange} />
        <Button name='Delete' onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditCard;
