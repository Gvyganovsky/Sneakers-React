import styles from './Catalog.module.scss';
import Product from '../Product';
import React from 'react';

function Catalog({ onCart, onFavorite, cartProducts, products, favorite, isLoading }: any) {
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (event: any) => {
        setSearchValue(event.target.value)
    }

    const renderProducts = () => {
        const filterProducts = products.filter((product: { title: string; }) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase()));

        return (isLoading ? [...Array(12)] : filterProducts).map((product: { title: any; id: any; }) => (
            <Product
                // key={product.title}
                onFavorite={(obj: any) => onFavorite(obj)}
                onCart={(obj: any) => onCart(obj)}
                favorited={favorite.some((obj: any) => Number(obj.id) === Number(product.id))}
                added={cartProducts.some((obj: any) => Number(obj.id) === Number(product.id))}
                isLoading={isLoading}
                {...product}
            />
        ))
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
                    {renderProducts()}
                </div>
            </div>
        </section >
    );
}

export default Catalog;
