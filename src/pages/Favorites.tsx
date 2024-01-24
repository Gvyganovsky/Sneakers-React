import React from 'react';
import styles from '../components/Catalog/Catalog.module.scss';
import Product from "../components/Product";
import Button from '../components/Button/';
import AppContext from '../AppContext'

function Favorites({ onCart, onFavorite }: any) {
    const { favorite } = React.useContext(AppContext);

    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__container}>
                <h2 className={styles.catalog__title}>
                    Мои закладки
                </h2>
                {
                    favorite.length > 0 ? (
                        <div className={styles.catalog__content}>
                            {favorite.map((product: { id: any, title: any; img: any; price: any; }) => (
                                <Product
                                    key={product.id}
                                    onFavorite={() => onFavorite(product)}
                                    onCart={(obj: any) => onCart(obj)}
                                    favorited={true}
                                    {...product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.nullFavorite}>
                            <img
                                src='/assets/icons/smileFav.svg'
                                alt='smileFav'
                                width={70}
                                height={70}
                                className={styles.nullFavorite__img}
                            />
                            <p className={styles.nullFavorite__title}>
                                Закладок нет
                            </p>
                            <p className={styles.nullFavorite__text}>
                                Вы ничего не добавляли в закладки
                            </p>
                            <Button text='Вернуться назад' className={styles.nullFavorite__btn} />
                        </div>
                    )
                }
            </div >
        </section >
    );
}

export default Favorites;