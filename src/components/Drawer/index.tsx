import styles from './Drawer.module.scss';
import CartItem from '../CartItem';
import Button from '../Button';
import React from 'react';
import AppContext from '../../AppContext';

function Drawer({ onCart, onClickCross }: any) {
    const { cartProducts } = React.useContext(AppContext);
    return (
        <section className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className={`${styles.drawer__title} ${styles.cross}`} onClick={onClickCross}>Корзина</h2>
                {
                    cartProducts.length > 0 ? (
                        <>
                            <ul className={styles.cards__list}>
                                {cartProducts.map((item: any) => (
                                    <CartItem
                                        key={item.id}
                                        onCart={(obj: any) => onCart(obj)}
                                        {...item}
                                    />
                                ))}
                            </ul>
                            <ul className={styles.drawer__priceBlock}>
                                <li className={styles.price__item}>
                                    <p className={styles.price__text}>
                                        Итого:
                                    </p>
                                    <div className={styles.gray__line}></div>
                                    <p className={styles.price__textPrice}>
                                        21 498 руб.
                                    </p>
                                </li>
                                <li className={styles.price__item}>
                                    <p className={styles.price__text}>
                                        Налог 5%:
                                    </p>
                                    <div className={styles.gray__line}></div>
                                    <p className={styles.price__textPrice}>
                                        1074 руб.
                                    </p>
                                </li>
                                <li className={styles.price__item}>
                                    <Button text='Оформить заказ' className={styles.price__btn} />
                                </li>
                            </ul>
                        </>
                    ) : (
                        <div className={styles.nullBasket}>
                            <img
                                src="/assets/img/nullBasket.svg"
                                alt="nullBasket"
                                width={120}
                                height={120}
                                className={styles.nullBasket__img}
                            />
                            <p className={styles.nullBasket__title}>
                                Корзина пустая
                            </p>
                            <p className={styles.nullBasket__text}>
                                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                            </p>
                            <Button text='Вернуться назад' className={styles.nullBasket__btn} onClick={onClickCross} />
                        </div>
                    )}
            </div>
        </section >
    );
}

export default Drawer;
