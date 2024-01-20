import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [BasketOpen, setBasketOpened] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);

  return (
    <section className="App">
      {BasketOpen ? <Drawer products={cartProducts} onClickCross={() => setBasketOpened(false)} /> : null}
      <Header onClickBasket={() => setBasketOpened(true)} />

      <Routes>
        <Route
          path='/'
          element={
            <Home
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              setFavorite={setFavorite}
            />
          }
        />
        <Route
          path='/favorites'
          element={
            <Favorites
              favorite={favorite}
              setFavorite={setFavorite}
              setCartProducts={setCartProducts}
            />
          }
        />
      </Routes>
    </section >
  );
}

export default App;
