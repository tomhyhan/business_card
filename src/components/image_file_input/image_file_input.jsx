import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ cloudinary, name, onFileChange }) => {
  const inputRef = useRef();
  const fileName = name || 'No file';
  const [loading, setLoading] = useState(false);

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploadedImg = await cloudinary.uploadImage(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploadedImg.original_filename,
      url: uploadedImg.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.gray}`}
          onClick={onButtonClick}
        >
          {fileName}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
