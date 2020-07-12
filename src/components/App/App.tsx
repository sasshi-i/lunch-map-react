import React from 'react';
import Header from '../Header';
import Map from '../Map';
import styles from './app.module.css';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className={ styles.wrapper }>
        <Header />
        <Switch>
          <Route exact={true} path="restaurants-map" component={Map} />
        </Switch>
      </div>
    );
  }
}

export default App;
