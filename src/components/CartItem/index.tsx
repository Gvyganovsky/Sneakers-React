import styles from './CartItem.module.scss';

function CartItem(props: any) {
    return (
        <li className={styles.cart__item}>
            <img
                src={props.img}
                alt='Sneaker'
                width={70}
                height={70}
                className={styles.cart__img}
            />
            <h3 className={styles.cart__title}>
                {props.title}
            </h3>
            <p className={styles.cart__price}>
                {props.price}
            </p>
            <img
                src='/assets/icons/cross.svg'
                alt='Сross'
                width={32}
                height={32}
                className={styles.cart__cross}
            />
        </li>
    )
}

export default CartItem;
