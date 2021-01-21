import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import Cloudinary from './service/cloudinary';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardDB from './service/card_db';

// connect compenent(JS) with HTML using react-dom
const authService = new AuthService();
const cloudinary = new Cloudinary();
const cardDB = new CardDB();
const FileInput = (props) => {
  return <ImageFileInput {...props} cloudinary={cloudinary} />;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} FileInput={FileInput} cardDB={cardDB} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
//sd
