import './Header.scss';
import Logo from '../../assets/icons/logo.svg';
import Basket from '../../assets/icons/basket.svg';
import Bookmarks from '../../assets/icons/bookmarks.svg';
import Profile from '../../assets/icons/profile.svg';

function Header() {
    return (
        <section className='header'>
            <div className='header__container container'>
                <div className='header__logo-block logo-block'>
                    <img
                        src={Logo}
                        alt='logo'
                        width={40}
                        height={40}
                        className='header__logo'
                    />
                    <h1 className='header__title'>
                        REACT SNEAKERS
                    </h1>
                    <p className='header__text'>
                        Магазин лучших кроссовок
                    </p>
                </div>

                <ul className='header__list'>
                    <li className='header__item header-item'>
                        <img
                            src={Basket}
                            alt="Basket"
                            width={18}
                            height={18}
                            className='header__icon'
                        />
                        <p className='header-item__text'>
                            1205 руб.
                        </p>
                    </li>
                    <li className='header__item header-item'>
                        <img
                            src={Bookmarks}
                            alt="Bookmarks"
                            width={18}
                            height={18}
                            className='header__icon'
                        />
                        <p className='header-item__text'>
                            Закладки
                        </p>
                    </li>
                    <li className='header__item header-item'>
                        <img
                            src={Profile}
                            alt="Profile"
                            width={18}
                            height={18}
                            className='header__icon'
                        />
                        <p className='header-item__text'>
                            Профиль
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Header;
