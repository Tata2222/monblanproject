import React from 'react';
import {Header} from './components/Header/Header';
import {CardList} from './components/CardList/CardList';
import { Button } from './components/Button/Button';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <CardList />
          <Button />
        </div>
      </main>
      <div className="shape1"></div>
      <div className="shape2"></div>
    </>
  );
}

export default App;
