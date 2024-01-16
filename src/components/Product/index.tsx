import styles from './Product.module.scss';
import notLike from '../../assets/icons/notLike.svg';
import notAdd from '../../assets/icons/notAdd.svg';

function Product(props: any) {
    const onClickBtnLike = () => {
        alert('niugaa')
    }

    return (
        <section className={styles.product}>
            <img
                src={notLike}
                alt="notLike"
                width={32}
                height={32}
                className={styles.product__likeIcon}
                onClick={onClickBtnLike}
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
                    src={notAdd}
                    alt="notAdd"
                    width={32}
                    height={32}
                    className={styles.product__addIcon}
                />
                <p className={styles.product__text}>
                    Цена:
                </p>
                <p className={styles.product__price}>
                    {props.price}
                </p>
            </div>
        </section>
    );
}

export default Product;
