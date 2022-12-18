import fish from '../assets/bottomfish.png';
import bottomlogo from '../assets/bottomlogo.svg';
import wa from '../assets/Ватсапп.svg';


const Contacts = () => {
    return (
        <section class="contact">
            <div class="contact__lead">
                <img src={bottomlogo} alt="" class="lead__img"></img>
                <h2 class="lead__title">Контактная информация</h2>
                <img src={bottomlogo} alt="" class="lead__img"></img>
            </div>
            <div class="contact__content" style={{
                backgroundImage: `url(${fish})`,
            }}>
                <div></div>
                <p class="contact__text">
                    Самовывоз из нашего офиса по адресу:
                    г. Новосибирск, ул. Ломоносова 55/1
                    (предварительно бронируйте заказ).
                    <br></br>
                    <br></br>
                    Цены на сайте могут отличаться от цен в магазине.
                    <br></br>
                    * Бесплатная доставка красной икры от 1 кг.
                    <br></br>
                    <br></br>
                    Отзывы о работе компании и предложения отправляйте на почту: sasha@sokoloff-fish.ru
                    <br></br>
                    Телефон: +7 (983) 129 29 90
                </p>
                <img src={wa} alt="" class=""></img>
            </div>
        </section>
    );
}

export default Contacts;