import React from 'react';
import './App.scss';
import Catalog from './components/Catalog';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [BasketOpen, setBasketOpened] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);

  return (
    <section className="App">
      {BasketOpen ? <Drawer products={cartProducts} onClickCross={() => setBasketOpened(false)} /> : null}
      <Header onClickBasket={() => setBasketOpened(true)} />
      <Hero />
      <Catalog cartProducts={cartProducts} setCartProducts={setCartProducts} setFavorite={setFavorite} />
    </section>
  );
}

export default App;
