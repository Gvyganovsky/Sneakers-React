import React from 'react';
import Catalog from '../components/Catalog';
import Hero from '../components/Hero';

function Home({ cartProducts, setCartProducts, setFavorite }: any) {
    return (
        <>
            <Hero />
            <Catalog cartProducts={cartProducts} setCartProducts={setCartProducts} setFavorite={setFavorite} />
        </>
    );
}

export default Home;