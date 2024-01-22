import React from 'react';
import Catalog from '../components/Catalog';
import Hero from '../components/Hero';

function Home({ cartProducts, setCartProducts, onFavorite, onCart, products, favorite }: any) {
    return (
        <>
            <Hero />
            <Catalog
                products={products}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                onFavorite={onFavorite}
                onCart={onCart}
                favorite={favorite}
            />
        </>
    );
}

export default Home;