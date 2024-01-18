import styles from './Drawer.module.scss';
import CartItem from '../CartItem';
import axios from 'axios';
import React from 'react';

function Drawer({ onClickCross }: any) {
    const [products, setProducts] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get('https://65a7c5a394c2c5762da7817d.mockapi.io/cart').then((res) => {
            setProducts(res.data);
        });
    }, []);

    const onRemoveToCart = (id: any) => {
        axios.delete(`https://65a7c5a394c2c5762da7817d.mockapi.io/cart/${id}`);
        setProducts((prev: any) => prev.filter((item: { id: any; }) => item.id !== id));
    }

    return (
        <section className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className={`${styles.drawer__title} ${styles.cross}`} onClick={onClickCross}>Корзина</h2>
                <ul className={styles.cards__list}>
                    {products.map((item: { id: any; img: any; title: any; price: any; }) => (
                        <CartItem
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            onClick={() => onRemoveToCart(item.id)}
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
