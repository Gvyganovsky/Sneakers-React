import styles from './Header.module.scss';
import Logo from '../../assets/icons/logo.svg';
import Basket from '../../assets/icons/basket.svg';
import Bookmarks from '../../assets/icons/bookmarks.svg';
import Profile from '../../assets/icons/profile.svg';

function Header() {
    return (
        <section className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logoBlock}>
                    <img
                        src={Logo}
                        alt='logo'
                        width={40}
                        height={40}
                        className={styles.header__logo}
                    />
                    <h1 className={styles.header__title}>
                        REACT SNEAKERS
                    </h1>
                    <p className={styles.header__text}>
                        Магазин лучших кроссовок
                    </p>
                </div>

                <ul className={styles.header__list}>
                    <li className={styles.header__item}>
                        <img
                            src={Basket}
                            alt="Basket"
                            width={18}
                            height={18}
                            className={styles.header__icon}
                        />
                        <p className={styles.header__iconText}>
                            1205 руб.
                        </p>
                    </li>
                    <li className={styles.header__item}>
                        <img
                            src={Bookmarks}
                            alt="Bookmarks"
                            width={18}
                            height={18}
                            className={styles.header__icon}
                        />
                        <p className={styles.header__iconText}>
                            Закладки
                        </p>
                    </li>
                    <li className={styles.header__item}>
                        <img
                            src={Profile}
                            alt="Profile"
                            width={18}
                            height={18}
                            className={styles.header__icon}
                        />
                        <p className={styles.header__iconText}>
                            Профиль
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Header;
