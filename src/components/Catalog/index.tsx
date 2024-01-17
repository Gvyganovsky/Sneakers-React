import styles from './Catalog.module.scss';
import Product from '../Product';

const products = [
    { img: '/assets/img/sneaker1.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999 },
    { img: '/assets/img/sneaker2.jpg', title: 'Мужские Кроссовки Nike Air Max 270', price: 12999 },
    { img: '/assets/img/sneaker3.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499 },
    { img: '/assets/img/sneaker4.jpg', title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999 },
];

function Catalog() {
    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__container}>
                <h2 className={styles.catalog__title}>
                    Все кроссовки
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
                        className={styles.search__input}
                    />
                </form>
                <div className={styles.catalog__content}>
                    {products.map((product) => (
                        <Product
                            img={product.img}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Catalog;
