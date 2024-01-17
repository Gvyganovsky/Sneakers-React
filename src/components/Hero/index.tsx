import styles from './Hero.module.scss'

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <img
                    src='/assets/icons/company.svg'
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
                        src='/assets/img/hero.png'
                        alt="Stan Smith, Forever!"
                        width={642}
                        height={300}
                        className={styles.hero__img}
                    />
                    <img
                        src='/assets/icons/arrow-circle.svg'
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
