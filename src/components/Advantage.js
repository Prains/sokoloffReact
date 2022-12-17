

const Advantage = () => {

    const cards = [
        {
            background: require('../assets/kam.png'),
            title: 'Напрямую с Камчатки',
            id: 1
        },
        {
            background: require('../assets/deg.png'),
            title: 'Бесплатная дегустация',
            id: 2
        },
        {
            background: require('../assets/payment.png'),
            title: 'Оплата после получения',
            id: 3
        },
        {
            background: require('../assets/delivery.png'),
            title: 'Бесплатная доставка',
            id: 4
        }
    ]

    return (
        <section className="advantage">
            <div className="advantage__topsection">
                <h2 className="advantage__title">
                    Наши преимущества
                </h2>
            </div>
            <div className="advantage__elements">
                {cards.map((card) => {
                    return <div className="element" key={card.id}>
                        <img src={card.background} alt={card.title} className="element__img"></img>
                        <div className="element__lead">
                            <h2 className="element__title">{card.title}</h2>
                        </div>
                    </div>
                })}
            </div>
            <div className="advantage__bottomsection">

            </div>
        </section>
    );
}

export default Advantage;