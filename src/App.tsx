import React from 'react';
import './App.scss';
import Catalog from './components/Catalog';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [BasketOpen, setBasketOpened] = React.useState(false);

  return (
    <section className="App">
      {BasketOpen ? <Drawer onClickCross={() => setBasketOpened(false)} /> : null}
      <Header onClickBasket={() => setBasketOpened(true)} />
      <Hero />
      <Catalog />
    </section>
  );
}

export default App;
