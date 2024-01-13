import './Catalog.scss';
import Product from '../Product/Product';
import Search from '../../assets/icons/search.svg';

import Sneaker1 from '../../assets/img/sneaker1.jpg';


function Catalog() {
    return (
        <section className='catalog'>
            <div className='catalog__container container'>
                <h2 className='catalog__title'>
                    Все кроссовки
                </h2>
                <form action="" className="search-block">
                    <img
                        src={Search}
                        alt='Search'
                        width={15}
                        height={15}
                        className='search-block__icon'
                    />
                    <input
                        placeholder='Поиск...'
                        type='search'
                        className='search-block__input'
                    />
                </form>
                <div className='catalog__content'>
                    <Product
                        img={Sneaker1}
                        title='Мужские Кроссовки Nike Blazer Mid Suede'
                        price='12 999 руб.'
                    />
                </div>
            </div>
        </section >
    );
}

export default Catalog;
