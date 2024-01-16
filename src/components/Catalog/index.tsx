import styles from './Catalog.module.scss';
import Product from '../Product';
import Search from '../../assets/icons/search.svg';

import sneaker1 from '../../assets/img/sneaker1.jpg'
import sneaker2 from '../../assets/img/sneaker2.jpg'
import sneaker3 from '../../assets/img/sneaker3.jpg'
import sneaker4 from '../../assets/img/sneaker4.jpg'

const products = [
    { img: sneaker1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.' },
    { img: sneaker2, title: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.' },
    { img: sneaker3, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.' },
    { img: sneaker4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.' },
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
                        src={Search}
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
