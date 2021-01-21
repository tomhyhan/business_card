import { Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Card from './components/card/card';
import styles from './app.module.css';

function App({ authService, FileInput, cardDB }) {
  return (
    <div>
      <Switch>
        <Route path={['/', '/login']} exact>
          <div className={styles.login}>
            <Login authService={authService}></Login>
          </div>
        </Route>
        <Route path={['/card']} exact>
          <div className={styles.card}>
            <Card
              authService={authService}
              FileInput={FileInput}
              cardDB={cardDB}
            ></Card>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
