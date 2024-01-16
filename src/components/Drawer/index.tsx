import styles from './Drawer.module.scss';
import Сross from '../../assets/icons/cross.svg';
import Sneaker1 from '../../assets/img/sneaker1.jpg';


function Drawer() {
    return (
        <section className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className={`${styles.drawer__title} ${styles.cross}`}>Корзина</h2>
                <ul className={styles.cards__list}>
                    <li className={styles.cart__item}>
                        <img
                            src={Sneaker1}
                            alt='Sneaker'
                            width={70}
                            height={70}
                            className={styles.cart__img}
                        />
                        <h3 className={styles.cart__title}>
                            Мужские Кроссовки Nike Air Max 270
                        </h3>
                        <p className={styles.cart__price}>
                            12 999 руб.
                        </p>
                        <img
                            src={Сross}
                            alt='Сross'
                            width={32}
                            height={32}
                            className={styles.cart__cross}
                        />
                    </li>
                    <li className={styles.cart__item}>
                        <img
                            src={Sneaker1}
                            alt='Sneaker'
                            width={70}
                            height={70}
                            className={styles.cart__img}
                        />
                        <h3 className={styles.cart__title}>
                            Мужские Кроссовки Nike Air Max 270
                        </h3>
                        <p className={styles.cart__price}>
                            12 999 руб.
                        </p>
                        <img
                            src={Сross}
                            alt='Сross'
                            width={32}
                            height={32}
                            className={styles.cart__cross}
                        />
                    </li>
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
                        <button className={styles.price__btn}>
                            Оформить заказ
                        </button>
                    </li>
                </ul>
            </div>
        </section >
    );
}

export default Drawer;
