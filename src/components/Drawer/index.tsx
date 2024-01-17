import styles from './Drawer.module.scss';
import CartItem from '../CartItem';

function Drawer({ onClickCross, products = [] }: any) {
    return (
        <section className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className={`${styles.drawer__title} ${styles.cross}`} onClick={onClickCross}>Корзина</h2>
                <ul className={styles.cards__list}>
                    {products.map((item: { img: any; title: any; price: any; }) => (
                        <CartItem
                            img={item.img}
                            title={item.title}
                            price={item.price}
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
