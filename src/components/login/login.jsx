import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();

  const navigateToCard = (userId) => {
    history.push({
      pathname: '/card',
      state: {
        id: userId,
      },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((result) => {
        navigateToCard(result.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && navigateToCard(user.uid);
    });
  });

  return (
    <div className={styles.login}>
      <Header authService={authService}></Header>
      <section className={styles.loginSection}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.providers}>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Login;
