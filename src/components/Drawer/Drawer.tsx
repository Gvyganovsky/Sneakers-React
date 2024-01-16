import './Drawer.scss';
import Сross from '../../assets/icons/cross.svg';
import Sneaker1 from '../../assets/img/sneaker1.jpg';


function Drawer() {
    return (
        <section className='overlay'>
            <div className='drawer'>
                <h2 className='drawer__title Сross'>Корзина</h2>
                <ul className='cards list'>
                    <li className='cart-item'>
                        <img
                            src={Sneaker1}
                            alt='Sneaker'
                            width={70}
                            height={70}
                            className='cart-item__img'
                        />
                        <h3 className='cart-item__title'>
                            Мужские Кроссовки Nike Air Max 270
                        </h3>
                        <p className='cart-item__price'>
                            12 999 руб.
                        </p>
                        <img
                            src={Сross}
                            alt='Сross'
                            width={32}
                            height={32}
                            className='cart-item__cross'
                        />
                    </li>
                    <li className='cart-item'>
                        <img
                            src={Sneaker1}
                            alt='Sneaker'
                            width={70}
                            height={70}
                            className='cart-item__img'
                        />
                        <h3 className='cart-item__title'>
                            Мужские Кроссовки Nike Air Max 270
                        </h3>
                        <p className='cart-item__price'>
                            12 999 руб.
                        </p>
                        <img
                            src={Сross}
                            alt='Сross'
                            width={32}
                            height={32}
                            className='cart-item__cross'
                        />
                    </li>
                </ul>
                <ul className='drawer__price-block price-block'>
                    <li className='price-block__item'>
                        <p className='price-block__text'>
                            Итого:
                        </p>
                        <div className='price-block__gray-line'></div>
                        <p className='price-block__price'>
                            21 498 руб.
                        </p>
                    </li>
                    <li className='price-block__item'>
                        <p className='price-block__text'>
                            Налог 5%:
                        </p>
                        <div className='price-block__gray-line'></div>
                        <p className='price-block__price'>
                            1074 руб.
                        </p>
                    </li>
                    <li className='price-block__item'>
                        <button className='price-block__btn btn'>
                            Оформить заказ
                        </button>
                    </li>
                </ul>
            </div>
        </section >
    );
}

export default Drawer;
