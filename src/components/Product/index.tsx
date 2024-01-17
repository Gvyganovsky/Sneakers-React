import styles from './Product.module.scss';
import React from 'react';

function Product(props: any) {
    const [isAdded, setIsAdded] = React.useState(false);
    const onBasket = () => setIsAdded(!isAdded);

    return (
        <section className={styles.product}>
            <img
                src='/assets/icons/notLike.svg'
                alt="notLike"
                width={32}
                height={32}
                className={styles.product__likeIcon}
                onClick={props.onFavorite}
            />
            <img
                src={props.img}
                alt='Sneaker'
                width={133}
                height={112}
                className={styles.product__img}
            />
            <h3 className={styles.product__title}>
                {props.title}
            </h3>
            <div className={styles.product__priceBlock}>
                <img
                    src={isAdded ? '/assets/icons/add.svg' : '/assets/icons/notAdd.svg'}
                    alt="Add"
                    width={32}
                    height={32}
                    className={styles.product__addIcon}
                    onClick={onBasket}
                />
                <p className={styles.product__text}>
                    Цена:
                </p>
                <p className={styles.product__price}>
                    {props.price} руб.
                </p>
            </div>
        </section>
    );
}

export default Product;