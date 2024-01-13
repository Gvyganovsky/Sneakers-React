import './Product.scss';
import notLike from '../../assets/icons/notLike.svg';
import notAdd from '../../assets/icons/notAdd.svg';


function Product(props: any) {
    return (
        <section className='product'>
            <img
                src={notLike}
                alt="notLike"
                width={32}
                height={32}
                className='product__like-icon'
            />
            <img
                src={props.img}
                alt='Sneaker'
                width={133}
                height={112}
                className='product__img'
            />
            <h3 className='product__title'>
                {props.title}
            </h3>
            <div className='product__price-block'>
            <img
                    src={notAdd}
                    alt="notAdd"
                    width={32}
                    height={32}
                    className='product__add-icon'
                />
                <p className='product__text'>
                    Цена:
                </p>
                <p className='product__price'>
                    {props.price}
                </p>
            </div>
        </section>
    );
}

export default Product;
