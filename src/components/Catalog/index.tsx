import styles from './Catalog.module.scss';
import Product from '../Product';
import React from 'react';

function Catalog({ cartProducts, setCartProducts }: any) {
    const [products, setProducts] = React.useState<any[]>([])
    React.useEffect(() => {
        fetch('https://65a7c5a394c2c5762da7817d.mockapi.io/products').then((res) => {
            return res.json();
        })
            .then((json) => {
                setProducts(json);
            })
    }, []);

    const onAddToCart = (obj: any) => {
        setCartProducts([...cartProducts, obj]);
    };

    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__container}>
                <h2 className={styles.catalog__title}>
                    Все кроссовки
                </h2>
                <form action="" className={styles.search__block}>
                    <img
                        src='/assets/icons/search.svg'
                        alt='Search'
                        width={15}
                        height={15}
                        className={styles.search__icon}
                    />
                    <input
                        placeholder='Поиск...'
                        type='search'
                        className={styles.search__input}
                    />
                </form>
                <div className={styles.catalog__content}>
                    {products.map((product) => (
                        <Product
                            img={product.img}
                            title={product.title}
                            price={product.price}
                            onAddToCart={(obj: any) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Catalog;
