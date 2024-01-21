import React from 'react';
import Catalog from '../components/Catalog';
import Hero from '../components/Hero';

function Home({ cartProducts, setCartProducts, onAddFavorite }: any) {
    return (
        <>
            <Hero />
            <Catalog cartProducts={cartProducts} setCartProducts={setCartProducts} onAddFavorite={onAddFavorite} />
        </>
    );
}

export default Home;