import styles from './Hero.module.scss'
import Company from '../../assets/icons/company.svg'
import hero from '../../assets/img/hero.png'
import arrowCircle from '../../assets/icons/arrow-circle.svg'

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <img
                    src={Company}
                    alt="company"
                    width={99}
                    height={40}
                />
                <div className={styles.hero__content}>
                    <div className={styles.hero__content__textBlock}>
                        <h2 className={styles.hero__title}>
                            <span className={styles.hero__title_green}>
                                Stan Smith
                            </span>, Forever!
                        </h2>
                        <button type='button' className={styles.hero__btn}>
                            Купить
                        </button>
                    </div>
                    <img
                        src={hero}
                        alt="Stan Smith, Forever!"
                        width={642}
                        height={300}
                        className={styles.hero__img}
                    />
                    <img
                        src={arrowCircle}
                        alt="arrow"
                        width={60}
                        height={60}
                        className={styles.hero__arrow}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;
