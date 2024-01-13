import './Hero.scss';
import Company from '../../assets/icons/company.svg'
import hero from '../../assets/img/hero.png'
import arrowCircle from '../../assets/icons/arrow-circle.svg'

function Hero() {
    return (
        <section className='hero'>
            <div className="hero__container container">
                <img
                    src={Company}
                    alt="company"
                    width={99}
                    height={40}
                />
                <div className='hero__content hero-content'>
                    <div className="hero-content__text-block">
                        <h2 className='hero-content__title'>
                            <span className='hero-content__title hero-content__title_green'>
                                Stan Smith
                            </span>, Forever!
                        </h2>
                        <button type='button' className='hero-content__btn btn'>
                            Купить
                        </button>
                    </div>
                    <img
                        src={hero}
                        alt="Stan Smith, Forever!"
                        width={642}
                        height={300}
                        className='hero-content__img'
                    />
                    <img
                        src={arrowCircle}
                        alt="arrow"
                        width={60}
                        height={60}
                        className='hero-content__arrow'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;
