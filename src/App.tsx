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
  const [favorite, setFavorite] = React.useState<any[]>([]);
  const [cartProducts, setCartProducts] = React.useState<any[]>([]);

  const onFavorite = async (obj: any) => {
    try {
      if (favorite.find((favObj: { id: any; }) => favObj.id === obj.id)) {
        axios.delete(`https://65aa1b5e081bd82e1d961920.mockapi.io/favorite/${obj.id}`);
        // setFavorite((prev: any) => prev.filter((product: { id: any; }) => product.id !== obj.id));
      } else {
        const { data } = await axios.post('https://65aa1b5e081bd82e1d961920.mockapi.io/favorite', obj);
        setFavorite((prev: any) => [...prev, data]);
      }
    } catch (error){
      alert('Не удалось добавить в закладки')
    }
  }

  const onCart = async (obj: any) => {
    try {
    if (cartProducts.find((prodObj: { id: any; }) => Number(prodObj.id) === Number(obj.id))) {
      axios.delete(`https://65a7c5a394c2c5762da7817d.mockapi.io/cart/${obj.id}`);
      setCartProducts((prev: any) => prev.filter((prodObj: { id: any; }) => prodObj.id !== obj.id));
      console.log(setCartProducts);
    } else {
      const { data } = await axios.post('https://65a7c5a394c2c5762da7817d.mockapi.io/cart', obj);
      setCartProducts((prev: any) => [...prev, data]);
    }
  } catch (error) {
    alert('Не удалось добавить товар в корзину')
  }
};

  return (
    <section className="App" >
      {BasketOpen ? <Drawer setCartProducts={setCartProducts} cartProducts={cartProducts} onCart={onCart} products={cartProducts} onClickCross={() => setBasketOpened(false)} /> : null}
      <Header onClickBasket={() => setBasketOpened(true)} />

      <Routes>
        <Route
          path='/'
          element={
            <Home
              onFavorite={onFavorite}
              onCart={onCart}


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
              onFavorite={onFavorite}


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
