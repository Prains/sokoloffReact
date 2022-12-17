import stars from '../assets/звездочки.svg'
import wood from '../assets/деревяшка.png'
const Item = (props) => {

    const red = props.red;
    const fish = props.style;

    return (
        <div className={`catalog__item ${fish}`} style={{
            backgroundImage: `url(${wood})`,
        }}>
            {red.map((item) => {
                return <div className="catalog__element" >
                    <h2 className="element__title">{item.title}</h2>
                    <img src={item.image} alt={item.title} className="element__image"></img>
                    <div className="element__text">
                        <p className="element__description">{item.description}</p>
                        <p className="element__quality">Качество: <img src={stars} alt="звездочки"></img></p>
                        <p className="element__weight">{item.weight}</p>
                        <p className="element__price">Стоимость: {item.price}</p>
                    </div>
                    <button className="element__about">Подробнее</button>
                    <div className="element__buttons">
                        <button className="element__tostash">В корзину</button>
                        <button className="element__buy">Купить</button>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Item;