import styles from './Catalog.module.scss';
import Product from '../Product';
import React from 'react';

function Catalog({ onCart, onFavorite, cartProducts, setCartProducts, products }: any) {
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (event: any) => {
        setSearchValue(event.target.value)
    }

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
                        .filter((product: { title: string; }) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((product: { title: any; id: any; }) => (
                            <Product
                                key={product.title}
                                onFavorite={(obj: any) => onFavorite(obj)}
                                onCart={(obj: any) => onCart(obj)}
                                added={cartProducts.some((obj: any) => Number(obj.id) === Number(product.id))}
                                {...product}
                            />
                        ))}
                </div>
            </div>
        </section >
    );
}

export default Catalog;
