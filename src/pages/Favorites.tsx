import React from "react";
import axios from "axios";
import styles from '../components/Catalog/Catalog.module.scss';
import Product from "../components/Product";

function Favorites({ setFavorite, favorite, setCartProducts }: any) {
    React.useEffect(() => {
        axios.get('https://65aa1b5e081bd82e1d961920.mockapi.io/favorite').then((res) => {
            setFavorite(res.data);
        });
    }, []);

    const onAddFavorite = (obj: any) => {
        if (favorite.find((obj: { id: any; }) => obj.id === obj.id)) {
            axios.delete(`https://65aa1b5e081bd82e1d961920.mockapi.io/favorite/${obj.id}`);
            setFavorite((prev: any) => prev.filter((product: { id: any; }) => product.id !== obj.id));
        } else {
            axios.post('https://65aa1b5e081bd82e1d961920.mockapi.io/favorite', obj);
            setFavorite((prev: any) => [...prev, obj]);
        }
    }

    const onAddToCart = (obj: any) => {
        axios.post('https://65a7c5a394c2c5762da7817d.mockapi.io/cart', obj);
        setCartProducts((prev: any) => [...prev, obj]);
    };

    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__container}>
                <h2 className={styles.catalog__title}>
                    Мои закладки
                </h2>

                <div className={styles.catalog__content}>
                    {favorite.map((product: { title: any; img: any; price: any; }) => (
                        <Product
                            key={product.title}
                            // img={product.img}
                            // title={product.title}
                            // price={product.price}
                            onAddFavorite={() => onAddFavorite(product)}
                            onAddToCart={(obj: any) => onAddToCart(obj)}
                            favorited={true}
                            {...product}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Favorites;