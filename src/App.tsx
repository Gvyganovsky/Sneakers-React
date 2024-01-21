import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import axios from 'axios';

function App() {
  const [BasketOpen, setBasketOpened] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [favorite, setFavorite] = React.useState<any[]>([]);

  const onAddFavorite = (obj: any) => {
    axios.post('https://65aa1b5e081bd82e1d961920.mockapi.io/favorite', obj);
    setFavorite((prev: any) => [...prev, obj]);
  }

  return (
    <section className="App" >
      {BasketOpen ? <Drawer products={cartProducts} onClickCross={() => setBasketOpened(false)} /> : null}
      <Header onClickBasket={() => setBasketOpened(true)} />

      <Routes>
        <Route
          path='/'
          element={
            <Home

              onAddFavorite={onAddFavorite}


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
