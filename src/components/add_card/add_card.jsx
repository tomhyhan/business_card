import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './add_card.module.css';

const AddCard = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobTitleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      jobTitle: jobTitleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  const onFileChange = (file) => {
    const { name, url } = file;
    setFile({ fileName: name, fileURL: url });
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='Company'
      />
      <select ref={themeRef} className={styles.select} name='theme'>
        <option placeholder='light'>light</option>
        <option placeholder='dark'>dark</option>
        <option placeholder='colorful'>colorful</option>
      </select>
      <input
        ref={jobTitleRef}
        className={styles.input}
        type='text'
        name='jobTitle'
        placeholder='Title'
      />
      <input
        ref={emailRef}
        className={styles.input}
        type='text'
        name='email'
        placeholder='Email'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        id=''
        rows='3'
        placeholder='Message'
      />
      <div className={styles.buttons}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button name='Add' onClick={onSubmit} />
      </div>
    </form>
  );
};

export default AddCard;
