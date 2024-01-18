import styles from './Catalog.module.scss';
import Product from '../Product';
import React from 'react';

function Catalog({ cartProducts, setCartProducts }: any) {
    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput = (event: any) => {
        setSearchValue(event.target.value)
    }

    const [products, setProducts] = React.useState<any[]>([]);
    React.useEffect(() => {
        fetch('https://65a7c5a394c2c5762da7817d.mockapi.io/products').then((res) => {
            return res.json();
        })
            .then((json) => {
                setProducts(json);
            })
    }, []);

    const onAddToCart = (obj: any) => {
        setCartProducts((prev: any) => [...prev, obj]);
    };

    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__container}>
                <h2 className={styles.catalog__title}>
                    {searchValue ? 'Поиск по запросу "' + searchValue + '"' : 'Все кроссовки'}
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
                        value={searchValue}
                        onChange={onChangeSearchInput}
                        className={styles.search__input}
                        maxLength={24}
                    />
                </form>
                <div className={styles.catalog__content}>
                    {products
                        .filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((product) => (
                            <Product
                                key={product.title}
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
