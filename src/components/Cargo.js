import cargo from '../assets/корзина.png'
import arup from '../assets/arrowup.svg'
import ardw from '../assets/arrowdown.svg'
import texture from '../assets/текстуракорзина.png'

const Cargo = () => {
    let allprice = 0
    let items = [
        {
            title: 'Икра Кижуч 250 гр',
            amount: 1,
            price: 15000,
            image: require('../assets/кижуч.png'),
        }
    ]

    return (
        <div class="cargo">
            <img src={cargo} alt="" class="cargo__title"></img>
            <div class="cargo__content">
                {items.map((item) => {
                    return <div class="cargo__element" style={{
                        backgroundImage: `url(${texture})`
                    }}>
                        <img src={item.image} alt={item.title} class="element__image"></img>
                        <p class="element__title">{item.title}</p>
                        <div class="element__amount">
                            <img src={arup} alt="arrow" class="amount__arrow arrow" ></img>
                            <p class="amount__number">{item.amount}</p>
                            <img src={ardw} alt="arrow" class="amount__arrow arrow"></img>
                        </div>
                        <div class="element__price">
                            <p class="price__title">Стоимость</p>
                            <p class="price__amount">{item.price}</p>
                        </div>
                    </div>
                })}
                <p class="cargo__amount">Итого: <span class="cargo__amount-span">{allprice}</span></p>
                <button class="cargo__buy">Купить</button>
            </div>
        </div >
    );
}

export default Cargo  