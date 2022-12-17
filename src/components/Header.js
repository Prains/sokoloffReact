import wa from '../assets/Ватсапп.svg'
import cargo from '../assets/Корзина.svg'
import logo from '../assets/logo1.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__nav">
                <img src={logo} alt="" className="nav__logo"></img>
                <div className="nav__menu">
                    <div className="nav__links">
                        <a href='/' className="nav__link">Икра</a>
                        <a href='/' className="nav__link">Рыба</a>
                        <a href='/' className="nav__link">Наши преимущества</a>
                        <a href='/' className="nav__link">Контакты</a>
                    </div>
                    <div className="nav__empty"></div>
                    <a className="nav__phone" href="mailto:+79831292990">+7 (983) 129 29 90</a>
                </div>
            </div>
            <div className="header__contacts">
                <a href="/" className="contacts__link"><img src={wa} alt=""></img></a>
                <a href="/" className="contacts__link"><img src={cargo} alt=""></img></a>
            </div>
        </header>
    );
}

export default Header;