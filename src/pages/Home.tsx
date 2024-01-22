import React from 'react';
import Catalog from '../components/Catalog';
import Hero from '../components/Hero';

function Home({ cartProducts, setCartProducts, onFavorite, onCart }: any) {
    return (
        <>
            <Hero />
            <Catalog
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                onFavorite={onFavorite}
                onCart={onCart}
            />
        </>
    );
}

export default Home;